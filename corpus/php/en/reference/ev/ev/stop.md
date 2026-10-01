---
id: "en-php-function-ev-stop"
language: "php"
lang: "en"
category: "function"
name: "Ev::stop"
title: "Stops the default event loop"
signature: "final public static void Ev::stop([int $how = ...])"
module: "ev"
source_url: "https://www.php.net/manual/en/ev.stop.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Stops the default event loop

## Description

```php
final public static void Ev::stop([int $how = ...])
```

Stops the default event loop

## Parameters

- **`$how`** — One of *Ev::BREAK_** constants.

## Return Values

No value is returned.

## See Also

  `Ev::run()`
