---
id: "en-php-function-evloop-backend"
language: "php"
lang: "en"
category: "function"
name: "EvLoop::backend"
title: "Returns an integer describing the backend used by libev"
signature: "public int EvLoop::backend()"
module: "ev"
source_url: "https://www.php.net/manual/en/evloop.backend.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns an integer describing the backend used by libev

## Description

```php
public int EvLoop::backend()
```

The same as `Ev::backend()`, but for the loop instance.

## Parameters

This function has no parameters.

## Return Values

Returns an integer describing the backend used by libev. See `Ev::backend()`.

## See Also

  `Ev::backend()`
