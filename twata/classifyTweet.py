import re, nltk, csv, codecs, tweetProcessor, pickle, os
import sys
sys.path.append("../")
import settings

def classifier(tweet):
    
    os.chdir('../sentimentClassifier')
    with open('savedNBClassifier.pkl', 'rb') as f:
        NBClassifier = pickle.load(f)
        
    processedTestLine = tweetProcessor.formatTweet(tweet)
    result = NBClassifier.classify(tweetProcessor.extract_features(tweetProcessor.getFeatureVector(processedTestLine)))
    print('Tweet: ', tweet)
    print('Classifier: ', result)
    return result
    
#check to see if the tweet mentions one of the contestants
def checkForXAxisTerm(tweet):
    termFound = 0
    formattedTweet = tweetProcessor.formatTweet(tweet)
    tweetWords = formattedTweet.split()
    print(tweetWords)
    
    for name in settings.NEG_COUNTS.keys():
        if name in tweetWords:
            termFound = 1
            print('term: ', name)
            return name
    if termFound == 0:
        noName = 'No name'
        return noName