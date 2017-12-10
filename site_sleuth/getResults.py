import mergeInfo, urlNormalizer

def run(pWebsites):

    websiteList = urlNormalizer.normalizeURL(pWebsites)
    requiredInfo=[]
    requiredInfo += mergeInfo.runSearch(websiteList)
    
    return requiredInfo