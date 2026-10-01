---
id: "en-php-function-evstat-set"
language: "php"
lang: "en"
category: "function"
name: "EvStat::set"
title: "Configures the watcher"
signature: "public void EvStat::set(string $path, float $interval)"
module: "ev"
source_url: "https://www.php.net/manual/en/evstat.set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Configures the watcher

## Description

```php
public void EvStat::set(string $path, float $interval)
```

Configures the watcher.

## Parameters

- **`$path`** — The path to wait for status changes on.
- **`$interval`** — Hint on how quickly a change is expected to be detected and should normally be specified as `0.0` to let *libev* choose a suitable value.

## Return Values

No value is returned.
