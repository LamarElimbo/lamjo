# Ensure that the url entries are in the correct readable format

import urlSlicer

def normalizeURL(pSite):
    websites = pSite.replace(" ", "")
    websiteList = websites.split(',')
    updatedList=[]
    
    for website in websiteList:
        updatedURL = urlSlicer.sliceURL(website)
        updatedURL = 'http://www.' + updatedURL
        updatedList.append(updatedURL)
    
    return updatedList