---
id: "en-php-function-evstat-prev"
language: "php"
lang: "en"
category: "function"
name: "EvStat::prev"
title: "Returns the previous set of values returned by EvStat::attr"
signature: "public void EvStat::prev()"
module: "ev"
source_url: "https://www.php.net/manual/en/evstat.prev.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the previous set of values returned by EvStat::attr

## Description

```php
public void EvStat::prev()
```

Just like `EvStat::attr()`, but returns the previous set of values.

## Parameters

This function has no parameters.

## Return Values

Returns an array with the same structure as the array returned by `EvStat::attr()`. The array contains previously detected values.

## See Also

  `EvStat::attr()`   `EvStat::stat()`
