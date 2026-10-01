---
id: "en-php-function-luasandbox-getprofilerfunctionreport"
language: "php"
lang: "en"
category: "function"
name: "LuaSandbox::getProfilerFunctionReport"
title: "Fetch profiler data"
signature: "public array LuaSandbox::getProfilerFunctionReport(int $units = LuaSandbox::SECONDS)"
module: "luasandbox"
source_url: "https://www.php.net/manual/en/luasandbox.getprofilerfunctionreport.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fetch profiler data

## Description

```php
public array LuaSandbox::getProfilerFunctionReport(int $units = LuaSandbox::SECONDS)
```

For a profiling instance previously started by `LuaSandbox::enableProfiler()`, get a report of the cost of each function.

The measurement unit used for the cost is determined by the `$units` parameter:

- **`LuaSandbox::SAMPLES`** — Measure in number of samples.
- **`LuaSandbox::SECONDS`** — Measure in seconds of CPU time.
- **`LuaSandbox::PERCENT`** — Measure percentage of CPU time.

## Parameters

- **`$units`** — Measurement unit constant.

## Return Values

Returns profiler measurements, sorted in descending order, as an associative `array`. Keys are the Lua function names (with source file and line defined in angle brackets), values are the measurements as `int` or `float`.

> On Windows, this function always returns an empty array. On operating systems that do not support `CLOCK_THREAD_CPUTIME_ID`, such as FreeBSD and Mac OS X, this function will report the elapsed wall-clock time, not CPU time.

## Examples

**Profiling Lua code**

```php


<?php

// create a new LuaSandbox
$sandbox = new LuaSandbox();

// Start the profiler
$sandbox->enableProfiler( 0.01 );

// ... Execute some Lua code here ...

// Fetch the profiler data
$data = $sandbox->getProfilerFunctionReport();

?>

   
```
