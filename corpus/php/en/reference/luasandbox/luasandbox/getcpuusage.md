---
id: "en-php-function-luasandbox-getcpuusage"
language: "php"
lang: "en"
category: "function"
name: "LuaSandbox::getCPUUsage"
title: "Fetch the current CPU time usage of the Lua environment"
signature: "public float LuaSandbox::getCPUUsage()"
module: "luasandbox"
source_url: "https://www.php.net/manual/en/luasandbox.getcpuusage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fetch the current CPU time usage of the Lua environment

## Description

```php
public float LuaSandbox::getCPUUsage()
```

Fetches the current CPU time usage of the Lua environment.

This includes time spent in PHP callbacks.

## Parameters

This function has no parameters.

## Return Values

Returns the current CPU time usage in seconds.

> On Windows, this function always returns zero. On operating systems that do not support `CLOCK_THREAD_CPUTIME_ID`, such as FreeBSD and Mac OS X, this function will return the elapsed wall-clock time, not CPU time.

## See Also

 `LuaSandbox::getMemoryUsage()` `LuaSandbox::getPeakMemoryUsage()` `LuaSandbox::setCPULimit()`
