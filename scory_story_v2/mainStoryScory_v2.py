import storyClassifier_v2

def v2_runProgram(sent):
    story = str(sent)
    paragraphs = story.split("\n")
    paragraphs[:] = (value for value in paragraphs if value != '\t')
    listofParagraphGenres, listOfScoredParagraphs = parseStory(paragraphs)
    fullBlendedList = blendSimilarParagraphs(listOfScoredParagraphs)
    blendedStoryGenres = paintStory(fullBlendedList, paragraphs)
    combinedGenres = zip(listofParagraphGenres, blendedStoryGenres)
    return paragraphs, combinedGenres

def parseStory(story):

    sceneSimilarityIndex = {'peaceful':1.1, 'dark':1.2, 'lonely':2.1, 'sadness':2.2, 'romantic':3.1, 'flirtatious':3.2, 'confidence':3.3, 'predatory':4.1, 'flight':4.2, 'exercise':5.1, 'fight':5.2, 'celebratory':6.1, 'chaotic':6.2, 'mischievous':6.3}

    paragraphGenres=[]
    paragraphScores=[]

    for paragraph in story:
        classification = storyClassifier_v2.v2_classifyStory(paragraph)
        paragraphGenres.append(classification)
        score = sceneSimilarityIndex.get(classification)
        paragraphScores.append(score)
    return paragraphGenres, paragraphScores

def blendSimilarParagraphs(paragraphGenres):
    blendedParagraphs=[]
    blendedParagraphs.extend(blendParagraphs(paragraphGenres, blendedParagraphs))
    while len(blendedParagraphs) != len(paragraphGenres):
        blendedParagraphs.extend(blendParagraphs(paragraphGenres, blendedParagraphs))
    return blendedParagraphs

def blendParagraphs(paragraphGenres, previousParagraphs):
        paragraphNumber = len(previousParagraphs)
        blendedParagraphs=[]
        startGenre = paragraphGenres[paragraphNumber]
        blendedParagraphs.append(startGenre)
        try:
            nextParagraphCount = 1
            nextParagraphGenre = paragraphGenres[paragraphNumber+nextParagraphCount]
            similarityScore = abs(nextParagraphGenre - startGenre)

            if similarityScore > 1.0:
                #paragraphs are not similar enough and a new song genre should be played
                return blendedParagraphs
            else:

                #paragraphs are similar enough and the same song genre should be played
                #you have to figure out the next paragraph that requires a song genre change

                genreComplete = False
                while genreComplete == False:
                    nextParagraphCount += 1
                    nextParagraphGenre = paragraphGenres[paragraphNumber+nextParagraphCount]

                    if abs(nextParagraphGenre - startGenre) <= 1.0:
                        continue

                    else:
                        newGenre = nextParagraphGenre
                        #decide whether the middle paragraphs are more similar to the start genre or the new genre
                        for middleParagraphNumber in range(nextParagraphCount-1, 0, -1):
                            middleParagraphGenre = paragraphGenres[paragraphNumber+middleParagraphNumber]

                            if abs(middleParagraphGenre - newGenre) < abs(middleParagraphGenre - startGenre):
                                #if middle paragraph's genre is more similar to the new genre make the current middle paragraph the start of the genre switch
                                if middleParagraphNumber == 1:
                                    for paragraph in range(0,middleParagraphNumber):
                                        blendedParagraphs.append(startGenre)
                                    genreComplete = True
                                else:
                                    continue

                            elif abs(middleParagraphGenre - newGenre) > abs(middleParagraphGenre - startGenre):
                                #if middle paragraph's genre is more similar to the start genre make the next paragraph the start of the genre switch
                                for paragraph in range(0,middleParagraphNumber):
                                    blendedParagraphs.append(startGenre)
                                genreComplete = True
                                break

                else:
                    return blendedParagraphs

        except IndexError:
            return blendedParagraphs

def paintStory(blendedList, paragraphs):
    sceneSimilarityIndex = {'1.1':'peaceful', '1.2':'dark', '2.1':'lonely', '2.2':'sadness', '3.1':'romantic', '3.2':'flirtatious', '3.3':'confidence', '4.1':'predatory', '4.2':'flight', '5.1':'exercise', '5.2':'fight', '6.1':'celebratory', '6.2':'chaotic', '6.3':'mischievous'}

    scoresAsStrings = [str(score) for score in blendedList]
    storyGenres = [sceneSimilarityIndex[score] for score in scoresAsStrings]

    return storyGenres