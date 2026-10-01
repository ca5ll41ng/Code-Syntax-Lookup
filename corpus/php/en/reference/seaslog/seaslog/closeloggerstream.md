---
id: "en-php-function-seaslog-closeloggerstream"
language: "php"
lang: "en"
category: "function"
name: "SeasLog::closeLoggerStream"
title: "Manually release stream flow from logger"
signature: "public static bool SeasLog::closeLoggerStream(int $model, string $logger)"
module: "seaslog"
source_url: "https://www.php.net/manual/en/seaslog.closeloggerstream.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Manually release stream flow from logger

## Description

```php
public static bool SeasLog::closeLoggerStream(int $model, string $logger)
```

Manually release stream flow from logger. SeasLog caches the stream handle opened by the log logger to save the overhead of creating a stream. The handle will be automatically released at the end of the request. If in CLI mode, the process will also automatically release when it exits. Or you can use the following functions to manually release(manually release function needs to update SeasLog 1.8.6 or updated version).

## Parameters

- **`$model`** — Constant int. SEASLOG_CLOSE_LOGGER_STREAM_MOD_ALL SEASLOG_CLOSE_LOGGER_STREAM_MOD_ASSIGN
- **`$logger`** — The logger name.

## Return Values

Return TRUE on released stream flow success, FALSE on failure.

## Examples

**`SeasLog::closeLoggerStream()` example**

```php


<?php

var_dump(SeasLog::closeLoggerStream());
var_dump(SeasLog::closeLoggerStream(SEASLOG_CLOSE_LOGGER_STREAM_MOD_ALL));
var_dump(SeasLog::closeLoggerStream(SEASLOG_CLOSE_LOGGER_STREAM_MOD_ASSIGN, 'logger_name'));

?>

   
```

The above example will output something similar to:

```text



bool(true)
bool(true)
bool(true)


   
```

## See Also

 `SeasLog::setLogger()` `SeasLog::getLastLogger()`
