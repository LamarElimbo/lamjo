# Collect WhoIs source info
# Required info collected: (2) Street Address with Country & (3) Phone Number & (4) Admin Contact  

import soupTheLink
import urlSlicer

def scrapeWhoIs(pURL):
    slicedURL = urlSlicer.sliceURL(pURL) 
    
    whoIsURL = "https://who.is/whois/" + slicedURL
    
    soupedWhoIsURL = soupTheLink.soupTheLink(whoIsURL)

    nameNum = 0
    organizationNum = 0
    addressNum = 0
    cityNum = 0
    stateOrProvinceNum = 0
    postalCodeNum = 0
    countryNum = 0
    phoneNum = 0
    emailNum = 0
    
    adminName = ""
    adminOrganization = ""
    adminAddress = ""
    adminCity = ""
    adminStateOrProvince = ""
    adminPostalCode = ""
    adminCountry = ""
    adminPhone = ""
    adminEmail = ""
    
    def newLoopTextGetter(loopNum, categoryInfo):
        loopNum += 1
        
        categoryHeader = categoryInfo.parent.next_sibling
        categoryText = categoryHeader.get_text()
        
        return loopNum, categoryText
        
    
    for header in soupedWhoIsURL.find_all('strong'):
        
        if header.get_text() == "Name":
            nameNum, name = newLoopTextGetter(nameNum, header)
            
            nameParts = name.split()
            fullName = ''

            for namePart in nameParts:
                fullName += namePart[0] + namePart[1:].lower() + " "
            
            if nameNum == 2:
                adminName = fullName
                
        elif header.get_text() == "Organization":
            organizationNum, organization = newLoopTextGetter(organizationNum, header)
            
            if organizationNum == 2:
                adminOrganization = organization
            
        elif header.get_text() == "Address":
            addressNum, address = newLoopTextGetter(addressNum, header)
            
            if addressNum == 2:
                adminAddress = address
            
        elif header.get_text() == "City":
            cityNum, newLoopTextGetter(cityNum, header)
            
            if cityNum == 2:
                adminCity = city
            
        elif header.get_text() == "State / Province":
            stateOrProvinceNum, stateOrProvince = newLoopTextGetter(stateOrProvinceNum, header)
            
            if stateOrProvinceNum == 2:
                adminStateOrProvince = stateOrProvince
            
        elif header.get_text() == "Postal Code":
            postalCodeNum, postalCode = newLoopTextGetter(postalCodeNum, header)
            
            if postalCodeNum == 2:
                adminPostalCode = postalCode
            
        elif header.get_text() == "Country":
            countryNum, country = newLoopTextGetter(countryNum, header)
            
            if countryNum == 2:
                adminCountry = country
                
        elif header.get_text() == "Phone":
            phoneNum, phone = newLoopTextGetter(phoneNum, header)
            
            if phoneNum == 2:
                adminPhone = phone
            
        elif header.get_text() == "Email":
            emailNum += 1
            email = header.parent.next_sibling
            email = "https://who.is/" + email.img['src']
            
            if emailNum == 2:
                adminEmail = email
            
    print("adminName", adminName)
    print("adminAddress", adminAddress)
    print("adminCity", adminCity)
    print("adminStateOrProvince", adminStateOrProvince)
    print("adminCountry", adminCountry)
    print("adminPhone", adminPhone)
    print("adminEmail", adminEmail)
    
    if len(adminName) == 0:
        adminName = 'No name found.'
    if len(adminAddress) == 0:
        adminAddress = 'No address found.'
    if len(adminCity) == 0:
        adminCity = 'No city found.'
    if len(adminStateOrProvince) == 0:
        adminStateOrProvince = 'No state or province found.'
    if len(adminCountry) == 0:
        adminCountry = 'No country found.'
    if len(adminPhone) == 0:
        adminPhone = 'No phone found.'
    if len(adminEmail) == 0:
        adminEmail = 'No email found.'
    
    return adminName, adminAddress, adminCity, adminStateOrProvince, adminCountry, adminPhone, adminEmail