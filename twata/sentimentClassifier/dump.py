#generate tweets file
import tweepy, dataset, os
import sys
sys.path.append("../")
import settings

db = dataset.connect(settings.CONNECTION_STRING)

result = db[settings.TABLE_NAME].all()
os.chdir('../data')
dataset.freeze(result, format='csv', filename=settings.CSV_NAME)