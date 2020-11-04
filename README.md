# CricInfo

This application is developed on the basis of challenge given by <b>Atlan for Frontend Engineer Intern.</b>

The basic motto of this application is to provide information about cricket players and IPL teams to users. Filters are made according to the traits of the players and teams in the given dataset.

There are two types of views in this application

 - <b>Without filters:</b> Displays all the players/teams and when clicked on one shows a detailed description of player/team in the form of a customized modal.
 - <b>With any filter:</b> To provide two views of the same page, I wrote logic deliberatly that when user clicks "Apply" in filter, the page shows message of "No results found". This is solely created to show my skills in UI/UX design.

<b>Note:</b> As the search and filter functionality were not required I did not implement them. I just designed them. I can easily implement them if required.

<b>Page load time</b>

To calculate the page load time, I have used several 3rd party applications. Initially I had an average load time of aabout <b>2.36sec.</b> Later I looked into methods to decrease the load time and hence I obeserved that the complete Antd plugin was imported into the project. Then I imported specifically only those components which are used in this project, hence decreased the load time. Their results obtained using refactored code is given below.


| Website | Region | Requests | Load time |
| ------- | ------ | -------- | --------- | 
| Pingdom | Asia-Japan-Tokyo | 11 | 1.79s |
| Pingdom | Europe-UK-London | 11 | 1.31s |
| DotCom tools | London | 7 | 1.2s |
| DotCom tools | San Francisco | 9 | 2s |
| DotCom tools | Shanghai | 7 | 4.5s |
| GTmetrix | Vancouver, Canada | 11 | 2.7s |


On an average, the page load time of this application now is <b>2.25sec.</b>
