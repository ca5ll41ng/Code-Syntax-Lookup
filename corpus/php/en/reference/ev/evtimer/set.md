---
id: "en-php-function-evtimer-set"
language: "php"
lang: "en"
category: "function"
name: "EvTimer::set"
title: "Configures the watcher"
signature: "public void EvTimer::set(float $after, float $repeat)"
module: "ev"
source_url: "https://www.php.net/manual/en/evtimer.set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Configures the watcher

## Description

```php
public void EvTimer::set(float $after, float $repeat)
```

Configures the watcher

## Parameters

- **`$after`** — Configures the timer to trigger after `$after` seconds.
- **`$repeat`** — If repeat is `0.0`, then it will automatically be stopped once the timeout is reached. If it is positive, then the timer will automatically be configured to trigger again every repeat seconds later, until stopped manually.

## Return Values

No value is returned.
