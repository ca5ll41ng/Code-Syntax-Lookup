---
id: "en-php-function-eventbase-gotexit"
language: "php"
lang: "en"
category: "function"
name: "EventBase::gotExit"
title: "Checks if the event loop was told to exit"
signature: "public bool EventBase::gotExit()"
module: "event"
source_url: "https://www.php.net/manual/en/eventbase.gotexit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if the event loop was told to exit

## Description

```php
public bool EventBase::gotExit()
```

Checks if the event loop was told to exit by `EventBase::exit()`.

## Parameters

This function has no parameters.

## Return Values

Returns `true`, event loop was told to exit by `EventBase::exit()`. Otherwise `false`.

## See Also

  `EventBase::exit()`   `EventBase::stop()`   `EventBase::gotStop()`
