---
id: "en-php-function-evperiodic-at"
language: "php"
lang: "en"
category: "function"
name: "EvPeriodic::at"
title: "Returns the absolute time that this watcher is supposed to trigger next"
signature: "public float EvPeriodic::at()"
module: "ev"
source_url: "https://www.php.net/manual/en/evperiodic.at.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the absolute time that this watcher is supposed to trigger next

## Description

```php
public float EvPeriodic::at()
```

When the watcher is active, returns the absolute time that this watcher is supposed to trigger next. This is not the same as the offset argument to `EvPeriodic::set()` or `EvPeriodic::__construct()`, but indeed works even in interval mode.

## Parameters

This function has no parameters.

## Return Values

Returns the absolute time this watcher is supposed to trigger next in seconds.
