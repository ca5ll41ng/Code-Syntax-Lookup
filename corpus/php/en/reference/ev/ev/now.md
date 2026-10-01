---
id: "en-php-function-ev-now"
language: "php"
lang: "en"
category: "function"
name: "Ev::now"
title: "Returns the time when the last iteration of the default event loop has started"
signature: "final public static float Ev::now()"
module: "ev"
source_url: "https://www.php.net/manual/en/ev.now.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the time when the last iteration of the default event loop has started

## Description

```php
final public static float Ev::now()
```

Returns the time when the last iteration of the default event loop has started. This is the time that timers( `EvTimer` and `EvPeriodic`) are based on, and referring to it is usually faster than calling `Ev::time()`.

## Parameters

This function has no parameters.

## Return Values

Returns number of seconds(fractional) representing the time when the last iteration of the default event loop has started.

## See Also

  `Ev::nowUpdate()`
