---
id: "en-php-function-syncevent-reset"
language: "php"
lang: "en"
category: "function"
name: "SyncEvent::reset"
title: "Resets a manual event"
signature: "public bool SyncEvent::reset()"
module: "sync"
source_url: "https://www.php.net/manual/en/syncevent.reset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Resets a manual event

## Description

```php
public bool SyncEvent::reset()
```

Resets a `SyncEvent` object that has been fired/set. Only valid for manual event objects.

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`SyncEvent::reset()` example**

```php


<?php
// In a web application:
$event = new SyncEvent("DemoApplication", true);
$event->wait();

// In a cron job:
$event = new SyncEvent("DemoApplication", true);
$event->reset();
/* ... Do some maintenance task(s) ... */
$event->fire();
?>

   
```

## See Also

 `SyncEvent::fire()` `SyncEvent::reset()` `SyncEvent::wait()`
