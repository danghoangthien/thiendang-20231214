# Coin Inspector

Inpecting price and OHLC statistic of a crypto currency coin/token in specific day range

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Libraries in Use](#libraries-in-use)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running with Docker](#running-with-docker)
  - [Running without Docker](#running-without-docker)
- [Usage](#usage)
- [Others](#others)
- [Todo](#todo)

## Introduction

Inspecting price and OHLC statistic of a crypto currency coin/token in specific day range using market data from CoinGecko

## Features

- Exploring trending coins.
- Exploring coin list data.
- Chart based price statistic by day range.
- Chart based OHLC statistic by day range.
- Market data provider is configurable, current version is supporting CoinGecko.
- Coin list data is cached by leveraging localstorage.
- Ultility for Calculating Max Profit of given day sequence stock prices list.
- compare coin/token price based on USD by default.

## Frontend Architect Highlight

- Applying clean and loose decoupling components.
- Seperating Bussiness logic vs View logic.
- Leverage state management library to make lesser props parsing between components (no parameters better than few parameter methods).
- Following DRY and SOLID principle as possible.

## Libraries in Use

- [Mui v5](https://mui.com/)
- [React Chartjs 2](https://reactchartjs.github.io/react-chartjs-2/)
- [Chartjs Chart Financial](https://github.com/chartjs/chartjs-chart-financial)
- [@amcharts/amcharts3-react](https://www.amcharts.com/docs/v3/)
- [Rematch](https://rematch.github.io/rematch/#/)
- [Jest](https://github.com/jestjs/jest)

## Getting Started

Here are instructions on how to set up and run project.

### Running with Docker
```bash
# Copy the .env.example file to .env
cp .env.example .env

# Replace the placeholder PORT with your desired port number in the .env file
# Example: Replace PORT=5173 with PORT=your_desired_port
nano .env  # or use your preferred text editor

# Start the application using Docker
docker-compose up
```

### Running without Docker
```
npm install
npm run dev
```

## Usage

- Access the app ex: http://localhost:5173/
- Search for a coin in search box or click on one of trending coin when you hover the search area
- Once a coin has selected, Price chart by default will appeared with:
  - default day range: 1
- Click to other day range to see relevant chart info
- Click to OHLC to see statictics info for selected day range
- On OHLC chart, hover a candle stick to see HOLC within that period

### Demo Video
[Coin Inspector App WalkThrough](https://www.awesomescreenshot.com/video/23281000?key=c357ab37197a6ea68b877a6be9da1268)


## Others

Answer for Question 2 could be found at:

```
src/utils/StockAnalyzer.ts
```

Run test:

```bash
 docker exec -it coin-inspector-app  yarn test
```

[Test Results](http://tinyurl.com/ynulvkem)

## TODO

- Applying proper types/interfaces for chart modules
- Applying more Unit test & automation test
- Improving UI/UX
- Caching Trending coins using localStorage
- Make vs_currency configurable
- Supporting more vs_currency
