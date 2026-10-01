---
id: "en-php-function-evtimer-again"
language: "php"
lang: "en"
category: "function"
name: "EvTimer::again"
title: "Restarts the timer watcher"
signature: "public void EvTimer::again()"
module: "ev"
source_url: "https://www.php.net/manual/en/evtimer.again.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Restarts the timer watcher

## Description

```php
public void EvTimer::again()
```

This will act as if the timer timed out and restart it again if it is repeating. The exact semantics are:

1. if the timer is pending, its pending status is cleared.
2. if the timer is started but non-repeating, stop it (as if it timed out).
3. if the timer is repeating, either start it if necessary (with the `repeat` value), or reset the running timer to the `repeat` value.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## See Also

  `EvWatcher::stop()`
