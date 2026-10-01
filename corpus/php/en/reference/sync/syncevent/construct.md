---
id: "en-php-function-syncevent-construct"
language: "php"
lang: "en"
category: "function"
name: "SyncEvent::__construct"
title: "Constructs a new SyncEvent object"
signature: "public SyncEvent::__construct([string $name = ...], bool $manual = false, bool $prefire = false)"
module: "sync"
source_url: "https://www.php.net/manual/en/syncevent.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs a new SyncEvent object

## Description

```php
public SyncEvent::__construct([string $name = ...], bool $manual = false, bool $prefire = false)
```

Constructs a named or unnamed event object.

## Parameters

- **`$name`** — The name of the event if this is a named event object.
  > If the name already exists, it must be able to be opened by the current user that the process is running as or an exception will be thrown with a meaningless error message.


- **`$manual`** — Specifies whether or not the event object must be reset manually.
  > Manual reset event objects allow all waiting processes through until the object is reset.


- **`$prefire`** — Specifies whether or not to prefire (signal) the event object.
  > Only has impact if the calling process/thread is the first to create the object.



## Return Values

The new `SyncEvent` object.

## Errors/Exceptions

An exception is thrown if the event object cannot be created or opened.

## Examples

**`SyncEvent::__construct()` example**

```php


<?php
// In a web application:
$event = new SyncEvent("GetAppReport");
$event->fire();

// In a cron job:
$event = new SyncEvent("GetAppReport");
$event->wait();
?>

   
```

## Changelog

|  |  |
| --- | --- |
| PECL sync 1.1.0 | Added `$prefire`. |

## See Also

 `SyncEvent::fire()` `SyncEvent::reset()` `SyncEvent::wait()`
