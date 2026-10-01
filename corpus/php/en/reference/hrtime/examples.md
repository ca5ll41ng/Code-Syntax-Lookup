---
id: "en-php-guide-hrtime-examples"
language: "php"
lang: "en"
category: "guide"
name: "hrtime.examples"
title: "Examples"
module: "hrtime"
source_url: "https://www.php.net/manual/en/hrtime.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Examples

## Basic usage

The example illustrates the basic StopWatch class usage

**Measure several code blocks execution and get the total**

```php


<?php

$c = new HRTime\StopWatch;

$c->start();
/* measure this code block execution */
for ($i = 0; $i < 1024*1024; $i++);
$c->stop();
$elapsed0 = $c->getLastElapsedTime(HRTime\Unit::NANOSECOND);

/* measurement is not running here*/
for ($i = 0; $i < 1024*1024; $i++);

$c->start();
/* measure this code block execution */
for ($i = 0; $i < 1024*1024; $i++);
$c->stop();
$elapsed1 = $c->getLastElapsedTime(HRTime\Unit::NANOSECOND);

$elapsed_total = $c->getElapsedTime(HRTime\Unit::NANOSECOND);

?>

   
```
