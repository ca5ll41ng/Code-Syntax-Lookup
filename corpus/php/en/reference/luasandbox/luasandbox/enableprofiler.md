---
id: "en-php-function-luasandbox-enableprofiler"
language: "php"
lang: "en"
category: "function"
name: "LuaSandbox::enableProfiler"
title: "Enable the profiler."
signature: "public bool LuaSandbox::enableProfiler(float $period = 0.02)"
module: "luasandbox"
source_url: "https://www.php.net/manual/en/luasandbox.enableprofiler.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Enable the profiler.

## Description

```php
public bool LuaSandbox::enableProfiler(float $period = 0.02)
```

Enables the profiler. Profiling will begin when Lua code is entered.

The profiler periodically samples the Lua environment to record the running function. Testing indicates that at least on Linux, setting a period less than 1ms will lead to a high overrun count but no performance problems.

## Parameters

- **`$period`** — Sampling period in seconds.

## Return Values

Returns a boolean indicating whether the profiler is enabled.

## See Also

 `LuaSandbox::disableProfiler()` `LuaSandbox::getProfilerFunctionReport()`
