# Mapping_Earthquakes
Leaflet
## Introduction

In this challenge we are going to create the map of the earthquake data in relation to the tectonic plates’ location on the earth, then create the  major earthquake data map where  the earthquakes with a magnitude greater than 4.5 on the map, and data on a third map.

### Technology used

JavaScript
Leaflet.js
geoJSON data
HTML

## Analysis

We add tectonic plate data using d3.json(), add the data using the geoJSON() layer, set the tectonic plate LineString data to stand out on the map, and add the tectonic plate data to the overlay object with the earthquake data.


Next we add major earthquake data to the map using d3.json(). We also add color and set the radius of the circle markers based on the magnitude of earthquake, and add a popup marker for each earthquake that displays the magnitude and location of the earthquake.

Next we add a third map style, dark map as a tile layer to earthquake map.

## Results

Now the map has three views
Street View
Satellite View
Dark View
<img width="1440" alt="Screen Shot 2022-03-25 at 11 00 20 AM" src="https://user-images.githubusercontent.com/72629108/160176726-b5be6132-c61a-49f4-a7a0-493439f9fd14.png">
<img width="1440" alt="Screen Shot 2022-03-25 at 11 00 30 AM" src="https://user-images.githubusercontent.com/72629108/160176881-5d3d9900-53bf-4d9a-9e8c-cea10195a066.png">

<img width="1440" alt="Screen Shot 2022-03-25 at 11 00 42 AM" src="https://user-images.githubusercontent.com/72629108/160176913-3170a35d-7e97-4e3d-a291-08283713fec4.png">



The viewer can toggle between different layers to view either all earthquakes, only major earthquakes (over 4.5 magnitude), and the earth's tectonic plates.
<img width="1440" alt="Screen Shot 2022-03-25 at 11 02 19 AM" src="https://user-images.githubusercontent.com/72629108/160177015-cd35cc94-d139-4397-801f-55a81408b597.png">


Major earthquakes data map shows that major earthquakes (over 4.5 magnitude) in the last week have all occurred near or on the tectonic plates.
