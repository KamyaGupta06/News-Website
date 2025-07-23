# NewsApp

A responsive news application built with HTML, CSS, and JavaScript that fetches and displays real-time news articles from various categories using the Fetch API.

## Features

- View news from multiple categories like Technology, Sports, Business, and more  
- Search news articles by keywords  
- Responsive and clean UI for desktop and mobile  
- **Dark mode** toggle for comfortable reading in low light  

## Tech Stack

- HTML, CSS, JavaScript  
- Fetch API for retrieving news data  

## How to Run

1. Clone or download the repo  
2. Open `index.html` in any modern browser  
3. Browse news by category, search with keywords, and toggle dark mode as desired  

## API Key Setup

This app uses [NewsAPI](https://newsapi.org/) to fetch news data. You need to:

1. Sign up at [NewsAPI](https://newsapi.org/) to get your free API key.  
2. Open the JavaScript file in the project.  
3. Replace the value of `api_key` variable with your API key:  

```js
const api_key = "YOUR_API_KEY";
```
Without a valid API key, the app will not fetch news.
