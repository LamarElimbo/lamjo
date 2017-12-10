import storyClassifier, spotifyConnector, youtubeConnector

#if __name__ == '__main__':
def runProgram(sent):
    story = str(sent)
    classification = storyClassifier.classifyStory(story)
    print('Classification: ', classification)
    genre, trackList = spotifyConnector.collectClassification(classification)
    print('Tracks: ', trackList)
    videoId = youtubeConnector.getVideo(trackList)
    print('Vid ID: ', videoId)
    return classification, genre, videoId