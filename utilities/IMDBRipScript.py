from bs4 import BeautifulSoup
import requests
import time

currentYear = 2021  #Enter current year
year = 1930         #Enter the year from which to start scraping

while year < currentYear:
    url = "https://www.imdb.com/search/title/?year=" + str(year)    #Enter where to scrape from

    source = requests.get(url).text
    soup = BeautifulSoup(source, 'lxml')

    lists = soup.select('div.lister-list h3 a')
    listText = []
    for movie in lists:
        listText.append(movie.text)
    print(listText)

    time.sleep(1)

    file = open(str(year) + ".txt", "w+")
    for movie in listText:
        file.write(str(movie) + "\n")


    print(str(year) + " document complete")
    file.close()
    year += 1
    songsArray = []


