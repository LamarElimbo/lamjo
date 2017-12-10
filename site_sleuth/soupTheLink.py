from bs4 import BeautifulSoup as soup
import urllib
from urllib import request

def soupTheLink(weblink):
    html = request.urlopen(weblink).read().decode('utf-8')
    return soup(html, 'lxml')
    
        