---
id: "en-php-function-gearmanworker-timeout"
language: "php"
lang: "en"
category: "function"
name: "GearmanWorker::timeout"
title: "Get socket I/O activity timeout"
signature: "public int GearmanWorker::timeout()"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanworker.timeout.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get socket I/O activity timeout

## Description

```php
public int GearmanWorker::timeout()
```

Returns the current time to wait, in milliseconds, for socket I/O activity.

## Parameters

This function has no parameters.

## Return Values

A time period in milliseconds. A negative value indicates an infinite timeout.

## See Also

 `GearmanWorker::setTimeout()`
