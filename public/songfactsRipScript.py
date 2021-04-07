from bs4 import BeautifulSoup
import requests
import time

currentYear = 2021  #Enter current year
year = 2020         #Enter the year from which to start scraping

songsArray = []

pages = 99
page = 1

while year < currentYear:
    url = "http://webcache.googleusercontent.com/search?q=cache:https://www.songfacts.com/browse/years/" + str(year)    #Enter where to scrape from
    while page <= pages:

        if page <= 1:
            source = requests.get(url).text
        else:
            source = requests.get(url + "/page" + str(page)).text
        soup = BeautifulSoup(source, 'lxml')

        if page <= 1:
            pagesString = soup.find_all('a', class_='firstten')
            try:
                pages = int(pagesString[1].text)
            except:
                pages = 1
    

        element = soup.find('ul', class_='browse-list-dark space-bot')
        songs = element.find_all('li')
        for song in songs:
            arr = []
            arr.append(song.a.text)
            song.a.decompose()
            arr.append(song.text[3:])
            songsArray.append(arr)

        page += 1
        time.sleep(1)

    file = open(str(year) + ".txt", "w+")
    for song in songsArray:
        file.write(str(song) + "\n")


    print(str(year) + " document complete")
    file.close()
    year += 1
    pages = 99
    page = 1
    songsArray = []


