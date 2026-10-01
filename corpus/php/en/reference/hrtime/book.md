---
id: "en-php-guide-book-hrtime"
language: "php"
lang: "en"
category: "guide"
name: "book.hrtime"
title: "High resolution timing"
module: "hrtime"
source_url: "https://www.php.net/manual/en/book.hrtime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# High resolution timing

HRTime

 Introduction  The HRTime extension implements a high resolution StopWatch class. It uses the best possible APIs on different platforms which brings resolution up to nanoseconds. It also makes possible to implement a custom stopwatch using low level ticks delivered by the underlying APIs.   
> As of PHP 7.3.0 the related function `hrtime()` is part of the core.
