---
id: "en-php-function-eventbase-gotstop"
language: "php"
lang: "en"
category: "function"
name: "EventBase::gotStop"
title: "Checks if the event loop was told to exit"
signature: "public bool EventBase::gotStop()"
module: "event"
source_url: "https://www.php.net/manual/en/eventbase.gotstop.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if the event loop was told to exit

## Description

```php
public bool EventBase::gotStop()
```

Checks if the event loop was told to exit by `EventBase::stop()`.

## Parameters

This function has no parameters.

## Return Values

Returns `true`, event loop was told to stop by `EventBase::stop()`. Otherwise `false`.

## See Also

  `EventBase::exit()`   `EventBase::stop()`   `EventBase::gotExit()`
