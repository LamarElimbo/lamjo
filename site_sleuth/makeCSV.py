# Composes csv file from collected data

import csv

def composeCSV(pData):

    with open('siteSleuth.csv', 'wb') as f:  # Just use 'w' mode in 3.x
        w = csv.DictWriter(f, pData.keys())
        w.writeheader()
        w.writerow(pData)