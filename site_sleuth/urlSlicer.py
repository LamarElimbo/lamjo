# slices 'http://www' off of url

def sliceURL(pTestURL):
    updatedURL = pTestURL.replace("http://www.",'').replace("https://www.",'').replace("http://",'').replace("https://",'').replace("www.",'')
    return updatedURL