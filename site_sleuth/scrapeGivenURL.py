# Collect from main URL
# Required info collected: (1a) Title & (1b) Description & (7) Social media pages and handles 

import soupTheLink
import urlSlicer

def scrapeGivenURL(pURL):
    souped = soupTheLink.soupTheLink(pURL)
    
    # Collect site title
    splitSiteTitle=[]
    try:
        siteTitle = souped.title.get_text()
        siteTitle = str(siteTitle)
        siteTitle = siteTitle.replace('\n', '')
        
        if len(siteTitle) == 0:
            siteTitle = urlSlicer.sliceURL(pURL).replace('.com', '').replace('/', '')
        else:
            splitSiteTitle = siteTitle.split('–')
            if len(splitSiteTitle) == 1:
                splitSiteTitle = siteTitle.split('|')
                if len(splitSiteTitle) == 1:
                    splitSiteTitle = siteTitle.split(':')
                    if len(splitSiteTitle) == 1:
                        splitSiteTitle = siteTitle.split('-')
                        if len(splitSiteTitle) == 1:
                            splitSiteTitle = siteTitle.split('—')
                        
            siteTitle = splitSiteTitle[0]
        print('title: ', siteTitle)
    except AttributeError:
        siteTitle = urlSlicer.sliceURL(pURL).replace('.com', '').replace('/', '')
        
    # Collect site description
    siteDescription=''
    if len(splitSiteTitle) == 2:
        siteDescription = splitSiteTitle[1]
    else:
        try:
            siteDescription = souped.find(id='site-description').get_text()

            if len(siteDescription) == 0:
                siteDescription = souped.find(name='description').get_text()


            print('description: ', siteDescription)
        except AttributeError:
            siteDescription = 'No description found.'
    
    # Collect social media
    commonSocialMedia = ['facebook', 'instagram', 'youtube', 'twitter', 'pinterest', 'linkedin', 'google', 'yelp', 'tumblr', 'github']

    listedURLs = [link.get('href') for link in souped.find_all('a')]
    socials=[]

    for link in listedURLs:

        for social in commonSocialMedia:
            try:
                if social in link:
                    link = urlSlicer.sliceURL(link)
                    link = link.lstrip('/')
                    link = 'http://' + link
                    socials.append((link, social))
                else:
                    continue
            except TypeError:
                continue

    print('social media: ', socials)
    
    if len(socials) == 0:
        socials.append(('No socials found.', 'None'))
        
    # Collect icon
    listedURLs = [link.get('href') for link in souped.find_all('link')]
    icons=[]
    
    if len(icons) == 0:
        for socialLink in socials:
            if 'twitter' == socialLink[1]:
                soupedTwitter = soupTheLink.soupTheLink(socialLink[0])
                twitterIcon = soupedTwitter.find(class_='ProfileAvatar-image ')['src']
                icons.append(twitterIcon)
    
    if len(icons) == 0:
        for link in listedURLs:
            if 'favicon' in link:
                icons.append(link)
            elif '.ico' in link:
                icons.append(link)
                
    try:
        icon = icons[0]
    except IndexError:
        icon = 'None'
    
    print('icon: ', icon)
    return siteTitle, siteDescription, socials, icon