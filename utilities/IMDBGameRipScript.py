from bs4 import BeautifulSoup
import requests
import time

currentYear = 2022  #Enter current year
year = 2021         #Enter the year from which to start scraping

while year < currentYear:
    url = "https://www.imdb.com/search/title/?title_type=video_game&release_date=" + str(year) + "-01-01," + str(year) + "2021-12-31&sort=num_votes,desc"   #Enter where to scrape from

    source = requests.get(url).text
    soup = BeautifulSoup(source, 'lxml')

    lists = soup.select('div.lister-list h3 a')

    if not lists:
        print("No event data for " + str(year))
        year += 1
        continue

    listText = []
    for game in lists:
        listText.append(game.text)


    time.sleep(1)

    file = open(str(year) + ".txt", "w+")
    for game in listText:
        file.write(str(game) + "\n")


    print(str(year) + " document complete")
    file.close()
    year += 1
    songsArray = []


