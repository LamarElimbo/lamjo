# Libraries
import requests
import json
import random

def requestVideo(url):
    videoRequest = requests.get(url)
    videoInfo = json.loads(videoRequest.text)
    return videoInfo['items'][-1]['id']['videoId']

def getVideo(tracks):
    base_url = 'https://content.googleapis.com/youtube/v3/search?maxResults=1&part=snippet&q='
    key = '&key=AIzaSyDFtVI4PrmLSxJ20GPUk-b-FuTbn7rY_ac'
    track = random.choice(tracks)
    artist = track[0].replace(' ', '%20')
    song = track[1].replace(' ', '%20')
    query_terms = artist + song
    full_url = base_url + query_terms + key
    videoId = requestVideo(full_url)
    return videoId