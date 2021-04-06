from bs4 import BeautifulSoup
import requests
import json
import time

songsArray = []
url = "https://www.songfacts.com/browse/years/1980"
pages = 99
page = 1

while page < pages:
    source = requests.get(url + "/page" + str(page)).text
    soup = BeautifulSoup(source, 'lxml')

    if page <= 1:
        pagesString = soup.find_all('a', class_='firstten')
        pages = int(pagesString[1].text)

    element = soup.find('ul', class_='browse-list-dark space-bot')
    songs = element.find_all('li')
    for song in songs:
        arr = []
        arr.append(song.a.text)
        song.a.decompose()
        arr.append(song.text[3:])
        songsArray.append(arr)

    page += 1
    time.sleep(60)

for song in songsArray:
    print(song)


