---
id: "en-php-function-evstat-stat"
language: "php"
lang: "en"
category: "function"
name: "EvStat::stat"
title: "Initiates the stat call"
signature: "public bool EvStat::stat()"
module: "ev"
source_url: "https://www.php.net/manual/en/evstat.stat.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Initiates the stat call

## Description

```php
public bool EvStat::stat()
```

Initiates the stat call(updates internal cache). It stats(using `lstat`) the `path` specified in the watcher and sets to the values found.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if `path` exists. Otherwise `false`.

## See Also

  `EvStat::attr()`   `EvStat::prev()`
