from flask import Flask, render_template, request
import sys
import urllib
import json

sys.path.insert(0, './site_sleuth/')
import getResults

sys.path.insert(0, './spellbook/')
import spellGetter

sys.path.insert(0, './scory_story_v1')
import mainStoryScory

sys.path.insert(0, './scory_story_v2')
import mainStoryScory_v2

sys.path.insert(0, './twata')
import getGraphScript
import datetime

sys.path.insert(0, './sent_pop')
import getSentPopScores
import tweetCollector
from models import AwardShows, Tweets

app = Flask(__name__)
requiredInfo=[]

@app.route('/')
@app.route('/landing')
def landing():
    return render_template('landing_template/landing.html', 
                           css_source='../static/landing_static/app_v1.css')

@app.route('/home')
def home():
    return render_template('home_template/home.html', 
                           css_source='../static/home_static/app_v1.css', 
                           activeTab='home')

@app.route('/home2')
def home2():
    return render_template('home2_template/home.html', 
                           css_source='../static/home2_static/app_v1.css', 
                           activeTab='home')

#Site Sleuth App
@app.route('/site_sleuth_search')
def site_sleuth_search():
    return render_template('site_sleuth_templates/search.html', 
                           css_source='../static/site_sleuth_static/app_v1.css', 
                           activeTab='site_sleuth')

@app.route('/site_sleuth_result', methods=['POST'])
def site_sleuth_result():
    try:
        websites = request.form['website']
        reqInfo = getResults.run(websites)
        requiredInfo.append(reqInfo)
        return render_template('site_sleuth_templates/result.html', 
                           css_source='../static/site_sleuth_static/app_v1.css', 
                           activeTab='site_sleuth',
                           requiredInfo=reqInfo)        
    except urllib.error.HTTPError:
        return render_template('site_sleuth_templates/error.html', 
                           css_source='../static/site_sleuth_static/app_v1.css', 
                           activeTab='site_sleuth')
    except urllib.error.URLError:
        return render_template('site_sleuth_templates/search.html', 
                           css_source='../static/site_sleuth_static/app_v1.css', 
                           activeTab='site_sleuth')
    except UnicodeDecodeError:
        return render_template('site_sleuth_templates/error.html', 
                           css_source='../static/site_sleuth_static/app_v1.css', 
                           activeTab='site_sleuth')

#Spellbook App
@app.route('/spellbook_search')
def spellbook_search():
    return render_template('/spellbook_templates/search.html', 
                           css_source='../static/spellbook_static/app_v1.css', 
                           activeTab='spellbook')

@app.route('/spellbook_result', methods=['POST'])
def spellbook_result():
    inputDesire = request.form['desire']    
    resultSpells = spellGetter.search(inputDesire)
    return render_template('/spellbook_templates/searchResultSpellbook.html', 
                           spellInfo=resultSpells, 
                           css_source='../static/spellbook_static/app_v1.css', 
                           activeTab='spellbook')

#Scory Story App 1.0
@app.route('/scory_story_v1')
def scory_story_v1_search():
    return render_template('/scory_story_v1_templates/searchScoryStoryV1.html', 
                           css_source='../static/scory_story_v1_static/app_v1.css',  
                           activeTab='scory_story_v1')

@app.route('/scory_story_v1_result', methods=['POST'])
def scory_story_v1_result():
    story = request.form['story']
    classification, songGenre, vidId = mainStoryScory.runProgram(story)
    
    return render_template('/scory_story_v1_templates/resultScoryStoryV1.html',
                           sent=story, genre=classification, musicGenre=songGenre, youtube_id=vidId, 
                           css_source='../static/scory_story_v1_static/app_v1.css',  
                           activeTab='scory_story_v1')

#Scory Story App 2.0
@app.route('/scory_story_v2')
def scory_story_v2_search():
    return render_template('/scory_story_v2_templates/searchScoryStoryV2.html', 
                           css_source='../static/scory_story_v2_static/app_v1.css',   
                           activeTab='scory_story_v2')

@app.route('/scory_story_v2_result', methods=['POST'])
def scory_story_v2_result():
    story = request.form['sent']
    storyParagraphs, combinedGenreList = mainStoryScory_v2.v2_runProgram(story)
    return render_template('/scory_story_v2_templates/resultScoryStoryV2.html',
                           paragraphs=storyParagraphs, combinedGenres=combinedGenreList,
                           css_source='../static/scory_story_v2_static/app_v1.css',   
                           repoLink='https://github.com/lamar133/scoryStory2.0',
                           activeTab='scory_story_v2')

#Sent Pop
@app.route('/sent_pop')
def sent_pop_home():
    awardShows = AwardShows.objects
    
    if Tweets.objects != None:
        Tweets.drop_collection()
        
    return render_template('/sent_pop_templates/home.html', 
                           css_source='static/sent_pop_static/home.css',
                           AwardShows=awardShows
                          )
 
    
@app.route('/sent_pop_graph', methods=['POST'])
def sent_pop_graph():
    full_selection = request.form['award']
    show_selection = full_selection.split(':')[0]
    award_selection = full_selection.split(':')[1]

    award_selection_query = AwardShows.objects(name = show_selection).fields(awards=1).to_json()
    award_selection_query = json.loads(award_selection_query)
    
    award_selection_nominees = []
    for award in award_selection_query[0]["awards"]:
        if award['award_type'] == award_selection:
            award_selection_nominees.extend(award['nominees'])
        
    tweetCollector.collectTweets(award_selection_nominees)
    
    negScores, negHeight = getSentPopScores.get_neg_values(sorted(award_selection_nominees))
    posScores, posHeight = getSentPopScores.get_pos_values(sorted(award_selection_nominees))
    
    tweets = Tweets.objects
    
    return render_template('/sent_pop_templates/graph.html', 
                           css_source='static/sent_pop_static/app.css',
                           searchedShow=show_selection,
                           searchedAward=award_selection,
                           neg_latestScores_ordered=negScores, 
                           neg_graphHeight=negHeight,
                           pos_latestScores_ordered=posScores, 
                           pos_graphHeight=posHeight,
                           x_cats=sorted(award_selection_nominees),
                           Tweets=tweets
                          )

if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)
    

# lamjo hompage language vocals fun facts
## en script: 
## fr script: school
## it script: fam origin
## ge script: german soap + pippi longstocking


# lajohn hompage language vocals fun facts
## en script:
## fr script:
## it script:
## ge script: german rap