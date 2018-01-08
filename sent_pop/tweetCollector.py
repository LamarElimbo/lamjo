import tweepy
import twitter_creds
from models import Tweets
import tweetProcessor
import pickle
import os


def collectTweets(p_noms):
    
    pickleDir = os.getcwd()
    pickleFilePath = pickleDir + '/sent_pop/savedNBClassifier.pkl'
    with open(pickleFilePath, 'rb') as f:
        NBClassifier = pickle.load(f)
    auth = tweepy.OAuthHandler(twitter_creds.TWITTER_APP_KEY, twitter_creds.TWITTER_APP_SECRET)
    auth.set_access_token(twitter_creds.TWITTER_KEY, twitter_creds.TWITTER_SECRET)

    api = tweepy.API(auth)

    for nom in p_noms:
        results = api.search(q=nom, count=10)
        
        for (idx, tweet) in enumerate(results[0:10]):
            tweet_text = results[idx].text

            processedTestLine = tweetProcessor.formatTweet(tweet_text)
            sent = NBClassifier.classify(tweetProcessor.extract_features(tweetProcessor.getFeatureVector(processedTestLine)))
        
            tweet = Tweets(
                nominee = nom,
                tweet = tweet_text,
                sentiment = sent
            )
            
            tweet.save()
            
            
            
            