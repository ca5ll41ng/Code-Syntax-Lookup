---
id: "en-php-function-syncevent-fire"
language: "php"
lang: "en"
category: "function"
name: "SyncEvent::fire"
title: "Fires/sets the event"
signature: "public bool SyncEvent::fire()"
module: "sync"
source_url: "https://www.php.net/manual/en/syncevent.fire.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fires/sets the event

## Description

```php
public bool SyncEvent::fire()
```

Fires/sets a `SyncEvent` object. Lets multiple threads through that are waiting if the event object was created with a manual value of `true`.

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`SyncEvent::fire()` example**

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

## See Also

 `SyncEvent::reset()` `SyncEvent::wait()`
