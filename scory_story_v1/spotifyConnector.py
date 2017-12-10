# Libraries
import requests
import json
import random
import base64

def getAuthorization():
    client_id = '5d8f9211dc824184a476c6e2327e5101'
    client_secret = '386dced4127c4d899f3247d29ed3e76a'
    grant_type = 'client_credentials'
    body_params = {'grant_type' : grant_type}
    tokenUrl='https://accounts.spotify.com/api/token'
    headerToken = requests.post(tokenUrl, auth=(client_id, client_secret), data=body_params)
    testToken = json.loads(headerToken.text)
    token = testToken['access_token']
    return token
    
def requestTracks(url):
    token = getAuthorization()
    bearer = 'Bearer ' + token
    header={'Authorization': bearer}
    tracks = requests.get(url, headers=header)
    tracksInfo = json.loads(tracks.text)
    print('track info: ', tracksInfo)
    return tracksInfo['tracks']['items']

def collectTracks(trackItems):
    tracks=[]
    itemCount=0
    for track in range(0,len(trackItems)):
        track=[]
        songTitle = trackItems[itemCount]['name']
        track.append(songTitle)
        artist = trackItems[itemCount]['artists'][0]['name']
        track.append(artist)
        tracks.append(track)
        itemCount+=1
    return tracks

def collectClassification(category):
    URL = 'https://api.spotify.com/v1/search?&type=track&q=genre%3A'

    if category == 'fight':
        genre = 'Dark-Hardcore'
        url = URL + genre
        trackItems = requestTracks(url)
        trackList = collectTracks(trackItems)
        return genre, trackList
    elif category == 'flight':
        genre = 'Vapor-House'
        url = URL + genre
        trackItems = requestTracks(url)
        trackList = collectTracks(trackItems)
        return genre, trackList
    elif category == 'romantic':
        genre = 'Deep-Chill'
        url = URL + genre
        trackItems = requestTracks(url)
        trackList = collectTracks(trackItems)
        return genre, trackList
    elif category == 'dark':
        genre = 'Trip-Hop'
        url = URL + genre
        trackItems = requestTracks(url)
        trackList = collectTracks(trackItems)
        return genre, trackList
    elif category == 'confidence':
        genre = 'Candy-Pop'
        url = URL + genre
        trackItems = requestTracks(url)
        trackList = collectTracks(trackItems)
        return genre, trackList
    elif category == 'peaceful':
        genre = 'Lounge'
        url = URL + genre
        trackItems = requestTracks(url)
        trackList = collectTracks(trackItems)
        return genre, trackList
    elif category == 'chaotic':
        genre = 'Speedcore'
        url = URL + genre
        trackItems = requestTracks(url)
        trackList = collectTracks(trackItems)
        return genre, trackList
    elif category == 'exercise':
        genre = 'Classic-Rock'
        url = URL + genre
        trackItems = requestTracks(url)
        trackList = collectTracks(trackItems)
        return genre, trackList
    elif category == 'sadness':
        genre = 'Ambient'
        url = URL + genre
        trackItems = requestTracks(url)
        trackList = collectTracks(trackItems)
        return genre, trackList
    elif category == 'lonely':
        genre = 'Substep'
        url = URL + genre
        trackItems = requestTracks(url)
        trackList = collectTracks(trackItems)
        return genre, trackList
    elif category == 'predatory':
        genre = 'Deep-German-Hip-Hop'
        url = URL + genre
        trackItems = requestTracks(url)
        trackList = collectTracks(trackItems)
        return genre, trackList
    elif category == 'flirtatious':
        genre = 'Classic-Colombian-Pop'
        url = URL + genre
        trackItems = requestTracks(url)
        trackList = collectTracks(trackItems)
        return genre, trackList
    elif category == 'mischievous':
        genre = 'Punk'
        url = URL + genre
        trackItems = requestTracks(url)
        trackList = collectTracks(trackItems)
        return genre, trackList
    elif category == 'celebratory':
        genre = 'Swedish-Indie-Rock'
        url = URL + genre
        trackItems = requestTracks(url)
        trackList = collectTracks(trackItems)
        return genre, trackList