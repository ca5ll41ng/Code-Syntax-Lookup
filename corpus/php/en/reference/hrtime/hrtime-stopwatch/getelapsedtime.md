---
id: "en-php-function-hrtime-stopwatch-getelapsedtime"
language: "php"
lang: "en"
category: "function"
name: "HRTime\\StopWatch::getElapsedTime"
title: "Get elapsed time for all intervals"
signature: "public float HRTime\\StopWatch::getElapsedTime([int $unit = ...])"
module: "hrtime"
source_url: "https://www.php.net/manual/en/hrtime-stopwatch.getelapsedtime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get elapsed time for all intervals

## Description

```php
public float HRTime\StopWatch::getElapsedTime([int $unit = ...])
```

Get elapsed time for all the previously closed intervals.

## Parameters

- **`$unit`** — Time unit represented by a HRTime\Unit constant. Default is HRTime\Unit::SECOND.

## Return Values

Returns `float` indicating elapsed time.
