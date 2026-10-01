---
id: "en-php-function-function-radius-strerror"
language: "php"
lang: "en"
category: "function"
name: "radius_strerror"
title: "Returns an error message"
signature: "string radius_strerror(resource $radius_handle)"
module: "radius"
source_url: "https://www.php.net/manual/en/function.radius-strerror.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns an error message

## Description

```php
string radius_strerror(resource $radius_handle)
```

If Radius-functions fail then they record an error message. This error message can be retrieved with this function.

## Parameters

- **`$radius_handle`** — The RADIUS resource.

## Return Values

Returns error messages as string from failed radius functions.
