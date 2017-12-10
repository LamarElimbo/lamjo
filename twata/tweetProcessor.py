import re, scoreAdjuster, pickle, string
import sys
sys.path.append("../")
import settings

def formatTweet(tweet):
    
    #covert to lowercase
    tweet = tweet.lower() 
    #strip punctuation
    tweet = tweet.strip(string.punctuation)
    #convert www.* or https?://* to URL
    tweet = re.sub('((www\.[^\s]+)|(https?://[^\s]+))', 'URL', tweet)
    #convert @username to AT_USER
    tweet = re.sub('@[^\s]+', 'AT_USER', tweet)
    #remove addional white spaces
    tweet = re.sub('[\s]+', ' ', tweet)
    #trim
    tweet = tweet.strip('\'"')
    
    return tweet

#reduce repetitious letters in words down to two, eg. huuuuungry => huungry
def letterReduction(emphaticWord):
    pattern = re.compile(r"(.)\1{1,}", re.DOTALL)
    return pattern.sub(r"\1\1", emphaticWord)

def getStopWordList(stopWordListFileName):
    #read the stopwords file and build a list
    stopWords = []
    stopWords.append('AT_USER')
    stopWords.append('URL')

    with open(stopWordListFileName) as fp:
        content = fp.readlines()
    
    content = [x.strip() for x in content]
    
    return content
#end

def getFeatureVector(tweet):
    featureVector = []
    words = tweet.split()
    
    for w in words:
        w = letterReduction(w)
        #check if the word starts with a letter or number
        val = re.search(r"^[a-zA-Z][a-zA-Z0-9]*$", w)
        #deal with negation
        #ignore if it is a stop word
        if w in settings.STOPWORDS or val is None:
            pass
        else:
            featureVector.append(w.lower())
    #return (name, featureVector)
    return featureVector
        
def extract_features(line):
    line_words = set(line)
    features = {}
    with open('featureList.pkl', 'rb') as l:
        fl = pickle.load(l)
    for word in fl:
        features['contains(%s)' % word] = (word in line_words)
    return features