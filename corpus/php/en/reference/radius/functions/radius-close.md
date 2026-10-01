---
id: "en-php-function-function-radius-close"
language: "php"
lang: "en"
category: "function"
name: "radius_close"
title: "Frees all ressources"
signature: "bool radius_close(resource $radius_handle)"
module: "radius"
source_url: "https://www.php.net/manual/en/function.radius-close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Frees all ressources

## Description

```php
bool radius_close(resource $radius_handle)
```

It is not needed to call this function because php frees all resources at the end of each request.

## Parameters

- **`$radius_handle`** — The RADIUS resource.

## Return Values

Returns `true` on success or `false` on failure.
