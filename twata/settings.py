import tweepy

DATA = 'data/master.csv'
STOPWORDS_DIR = 'data/stopwords.txt'
STOPWORDS = []

# What terms on Twitter would you like to track?
TRACK_TERMS = ['toronto', 'montreal', 'miami']

CONNECTION_STRING = "sqlite:///trackedTweets.db"
CSV_NAME = "trackedTweets.csv"
TABLE_NAME = "trackedTweets"

# What are the values in this topic that you want to compare
NEG_COUNTS = {'toronto': 0, 'montreal': 0, 'miami':0}

POS_COUNTS = {'toronto': 0, 'montreal': 0, 'miami':0}