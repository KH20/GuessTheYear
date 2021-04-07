import json

year = 1930
thisYear = 2021

dataDict = {}
subjects =["music", "movies", "games", "events"]

index = 0

while year < thisYear:
    dataDict[year] = {}
    while index <= len(subjects):
        try:
            file = open(subjects[index] + "/" + str(year) + ".txt", "r")
        except:
            index += 1
            continue

        musicList = []
        moviesList = []
        gamesList = []
        eventsList = []
    
        for line in file:
            if index == 0:
                musicList.append(line.rstrip().strip("[]").split(", '"))
            elif index == 1:
                moviesList.append(line.rstrip())
            elif index == 2:
                gamesList.append(line.rstrip())
            elif index == 3:
                eventsList.append(line.rstrip())

        if index == 0:
            dataDict[year][subjects[index]] = musicList
        elif index == 1:
            dataDict[year][subjects[index]] = moviesList
        elif index == 2:
            dataDict[year][subjects[index]] = gamesList
        elif index == 3:
            dataDict[year][subjects[index]] = eventsList

        
        file.close()
        index +=1


    musicList = []
    moviesList = []
    gamesList = []
    eventsList = []
    index = 0
    year += 1

json_object = json.dumps(dataDict, indent=4)
print(json_object)  

file = open("jsonData.json", "w")
file.write(json_object)
file.close()
