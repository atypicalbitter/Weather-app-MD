# 5 Day Weather Web Application - Matt Dudman

## Description
This is a weather application that gives the user the ability to search for a desired city and see a 5 Day weather update.
## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [About](#about)
- [License](#license)
- [Acknowledgement](#acknowledgement)
- [Deployed Link](#deployed-link)
- [Author](#author)


## Introduction

My goal with this application was to build a functioning online weather application where you could see the next 5 day's weather forecast on your webpage. This was possible by using Javascript, DayJS, HTML, CSS and API. 

## Installation 

N/A

## About

I started out by breaking the task into bitesize chucks and work forward that way. 

I was given starter code which was the style.css file and the index.html. 

I started out by linking the script tags accordingly and the css into the header. Then I looked at how to get weather data based on city name from API, this was via a function call. 

I used DayJS to show the current date to the user, enabling ease of searching when using the 5 day feature of the application. I then displayed using JS the current weather and the icon assocoiated with the current weather in the speicified location.

Next I would use getForecast to find the Lat & Lon using another API call. This would enable me to get the following days along with the current forecast. 

I added another function to save the history of the searches locally and that on click they would display previously searched cities. 

This is how the final page looked. ![Alt text](<Assets/Screenshot 2024-01-16 at 13.55.51.png>)

However, I foudn the alignment and feel of the webpage didnt sit right. The CSS that was provided was very long and had nearly 1800 lines within it. So I used the inspect feature on Google Chrome in able to try some things out and move items slightly. 

This is what I ended up with ![Alt text](<Assets/Screenshot 2024-01-16 at 13.55.37.png>)

Below is also screen shots of before and after, these were the only changes I could make in the CSS due to time restrictions. 

## Before
 ![Alt text](<Assets/Screenshot 2024-01-16 at 13.57.18.png>)

## After
 ![Alt text](<Assets/Screenshot 2024-01-16 at 13.56.59.png>)

I found that this challenged my skills and tested my knowledge, there are still some aspects that I feel I could improve, but the functionality of the application seems to be working well overall without any issues. 

## License

MIT License

Copyright (c) [2024] [Dudman-Matt]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Deployed Link
 * [See Deployed Link Here](https://atypicalbitter.github.io/Day-Planner-MD/)

## Acknowledgement

Help, guidence and support was offered by [Georgie Lillington](https://github.com/georgielill)
&
[Thomas Jack](https://github.com/quikstart86)


## Author
 * [Matt Dudman](https://github.com/atypicalbitter)