---
id: "en-php-function-hrtime-stopwatch-getlastelapsedtime"
language: "php"
lang: "en"
category: "function"
name: "HRTime\\StopWatch::getLastElapsedTime"
title: "Get elapsed time for the last interval"
signature: "public float HRTime\\StopWatch::getLastElapsedTime([int $unit = ...])"
module: "hrtime"
source_url: "https://www.php.net/manual/en/hrtime-stopwatch.getlastelapsedtime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get elapsed time for the last interval

## Description

```php
public float HRTime\StopWatch::getLastElapsedTime([int $unit = ...])
```

Get elapsed time for the previously closed interval.

## Parameters

- **`$unit`** — Time unit represented by a HRTime\Unit constant. Default is HRTime\Unit::SECOND.

## Return Values

Returns `float` indicating elapsed time.
