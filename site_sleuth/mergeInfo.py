# Main function to call and collect all useful information in dictionary

import urlSlicer
import scrapeGivenURL
import scrapeWhoIs
import scrapeAlexa
import getTimezone

def runSearch(pListOfURLs):
    requiredInfo=[]
    
    for url in pListOfURLs:
        slicedURL = urlSlicer.sliceURL(url)
        siteTitle, siteDescription, socials, icon = scrapeGivenURL.scrapeGivenURL(url)
        adminName, adminAddress, adminCity, adminStateOrProvince, adminCountry, adminPhone, adminEmail = scrapeWhoIs.scrapeWhoIs(url)
        score, keywords = scrapeAlexa.scrapeAlexa(slicedURL)

        timezoneId=''
        timezoneName=''
        if adminCity == 'No city found.' or adminStateOrProvince == 'No state or province found.':
            timezoneId = 'No timezone ID found.'
            timezoneName = 'No timezone name found.'
        else:
            timezoneId, timezoneName = getTimezone.getTimezone(adminCity, adminStateOrProvince)

        requiredInfo.append({'Website': url, 'Title': siteTitle, 'Description': siteDescription, 'Socials': socials, 'Icon': icon, "Admin's Name": adminName, 'Address': adminAddress, 'City': adminCity, 'State': adminStateOrProvince, 'Country': adminCountry, 'Phone': adminPhone, 'Email': adminEmail, 'Alexa Score': score, 'Keywords': keywords, 'Timezone ID': timezoneId, 'Timezone Name': timezoneName})
        
    return requiredInfo