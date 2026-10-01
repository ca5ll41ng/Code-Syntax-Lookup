---
id: "en-php-function-ev-depth"
language: "php"
lang: "en"
category: "function"
name: "Ev::depth"
title: "Returns recursion depth"
signature: "final public static int Ev::depth()"
module: "ev"
source_url: "https://www.php.net/manual/en/ev.depth.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns recursion depth

## Description

```php
final public static int Ev::depth()
```

The number of times `Ev::run()` was entered minus the number of times `Ev::run()` was exited normally, in other words, the recursion depth. Outside `Ev::run()`, this number is `0`. In a callback, this number is `1`, unless `Ev::run()` was invoked recursively (or from another thread), in which case it is higher.

## Parameters

This function has no parameters.

## Return Values

`ev_depth()` returns recursion depth of the default loop.

## See Also

  `Ev::iteration()`
