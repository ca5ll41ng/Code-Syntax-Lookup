---
id: "en-php-guide-book-trader"
language: "php"
lang: "en"
category: "guide"
name: "book.trader"
title: "Technical Analysis for Traders"
module: "trader"
source_url: "https://www.php.net/manual/en/book.trader.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Technical Analysis for Traders

Trader

 Introduction  The trader extension is a free open source stock library based on TA-Lib. It's dedicated to trading software developers requiring to perform technical analysis of financial market data. Alongside many indicators like ADX, MACD, RSI, Stochastic, TRIX the candlestick pattern recognition and several vector arithmetic and algebraic functions are present.    Calculations can be done in two modes - TA-Lib and Metastock. Changing it using trader_set_compat() will affect the way some trader functions work.    Some trader functions provide different results depending of the "starting point" of the data being involved. This is often referred as a function having memories. An example of such function is the Exponential Moving Average. It is possible to control the unstable period (the amount of data to strip off) using trader_set_unstable_period() function.    Extended documentation about indicators, formulas and implementations in other programming languages can be found under []().
