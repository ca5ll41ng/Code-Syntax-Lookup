---
id: "en-php-guide-class-datetimeimmutable"
language: "php"
lang: "en"
category: "guide"
name: "class.datetimeimmutable"
title: "The DateTimeImmutable class"
module: "datetime"
source_url: "https://www.php.net/manual/en/class.datetimeimmutable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The DateTimeImmutable class

DateTimeImmutable

  Introduction  Representation of date and time.    This class behaves the same as `DateTime` except new objects are returned when modification methods such as `DateTime::modify()` are called.     Class Synopsis   `DateTimeImmutable`   `implements` DateTimeInterface           Changelog  
|  |  |
| --- | --- |
| 8.4.0 | The class constants are now typed. |
| 7.1.0 | The `DateTimeImmutable` constructor now includes the current microseconds in the constructed value. Before this, it would always initialise the microseconds to `0`. |
