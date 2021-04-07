from bs4 import BeautifulSoup
import requests
import time

currentYear = 2021  #Enter current year
year = 1938         #Enter the year from which to start scraping

while year < currentYear:
    url = "https://www.onthisday.com/date/" + str(year)    #Enter where to scrape from

    source = requests.get(url).text
    soup = BeautifulSoup(source, 'lxml')

    lists = soup.select('li.event')

    if not lists:
        print("No event data for " + str(year))
        year += 1
        continue

    listText = []
    for event in lists:
        listText.append(event.text)

    print(listText)
    time.sleep(1)

    file = open(str(year) + ".txt", "w+")
    for event in listText:
        try:
            file.write(str(event) + "\n")
        except:
            continue


    print(str(year) + " document complete")
    file.close()
    year += 1



