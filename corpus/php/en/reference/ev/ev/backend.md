---
id: "en-php-function-ev-backend"
language: "php"
lang: "en"
category: "function"
name: "Ev::backend"
title: "Returns an integer describing the backend used by libev"
signature: "final public static int Ev::backend()"
module: "ev"
source_url: "https://www.php.net/manual/en/ev.backend.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns an integer describing the backend used by libev

## Description

```php
final public static int Ev::backend()
```

Returns an integer describing the backend used by *libev*. See Backend flags

## Parameters

This function has no parameters.

## Return Values

Returns an integer(bit mask) describing the backend used by *libev*.

## See Also

  `EvEmbed`   `Ev::embeddableBackends()`   `Ev::recommendedBackends()`   `Ev::supportedBackends()`   Backend flags
