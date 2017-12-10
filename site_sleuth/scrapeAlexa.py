# Collect Alexa source info
# Required info collected: (1c) Keywords & (5) Alexa rank (Global) (or a proxy for web-traffic) 

import soupTheLink

def scrapeAlexa(pSlicedURL):
    alexaURL = 'https://www.alexa.com/siteinfo/' + pSlicedURL
    print('alexa url: ', alexaURL)
    soupedAlexa = soupTheLink.soupTheLink(alexaURL)
    score = soupedAlexa.find(class_='metrics-data align-vmiddle').get_text()
    score = score.strip()
    print('score: ', score)
    if len(score) == 0:
        score = 'No alexa score found.'
    
    keywords=[]
    for header in soupedAlexa.find_all(class_='text-left header'):
        if header.get_text() == 'Keyword':
            keywordTable = header.parent.parent.parent
            for keyword in keywordTable.find_all(class_="topkeywordellipsis"):
                keyword = keyword.get_text() + "  "
                keywords.append(keyword[10:])
    print('keywords: ', keywords)
    if len(keywords) == 0:
        keywords.append('No kewords found.')
    
    return score, keywords