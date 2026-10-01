---
id: "en-php-function-evwatcher-clear"
language: "php"
lang: "en"
category: "function"
name: "EvWatcher::clear"
title: "Clear watcher pending status"
signature: "public int EvWatcher::clear()"
module: "ev"
source_url: "https://www.php.net/manual/en/evwatcher.clear.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Clear watcher pending status

## Description

```php
public int EvWatcher::clear()
```

If the watcher is pending, this method clears its `pending` status and returns its `revents` bitset(as if its callback was invoked). If the watcher isn't pending it does nothing and returns `0`.

Sometimes it can be useful to "poll" a watcher instead of waiting for its callback to be invoked, which can be accomplished with this function.

## Parameters

This function has no parameters.

## Return Values

In case if the watcher is pending, returns `revents` bitset as if the watcher callback had been invoked. Otherwise returns `0`.
