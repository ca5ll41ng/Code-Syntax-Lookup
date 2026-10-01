---
id: "en-php-function-syncevent-wait"
language: "php"
lang: "en"
category: "function"
name: "SyncEvent::wait"
title: "Waits for the event to be fired/set"
signature: "public bool SyncEvent::wait(int $wait = -1)"
module: "sync"
source_url: "https://www.php.net/manual/en/syncevent.wait.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Waits for the event to be fired/set

## Description

```php
public bool SyncEvent::wait(int $wait = -1)
```

Waits for the `SyncEvent` object to be fired.

## Parameters

- **`$wait`** — The number of milliseconds to wait for the event to be fired. A value of -1 is infinite.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`SyncEvent::wait()` example**

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

 `SyncEvent::fire()`
