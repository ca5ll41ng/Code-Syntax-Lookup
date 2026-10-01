---
id: "en-php-function-evwatcher-feed"
language: "php"
lang: "en"
category: "function"
name: "EvWatcher::feed"
title: "Feeds the given revents set into the event loop"
signature: "public void EvWatcher::feed(int $revents)"
module: "ev"
source_url: "https://www.php.net/manual/en/evwatcher.feed.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Feeds the given revents set into the event loop

## Description

```php
public void EvWatcher::feed(int $revents)
```

Feeds the given revents set into the event loop, as if the specified event had happened for the watcher.

## Parameters

- **`$revents`** — Bit mask of watcher received events.

## Return Values

No value is returned.
