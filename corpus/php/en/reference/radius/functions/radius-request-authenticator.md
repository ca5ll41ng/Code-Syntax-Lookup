---
id: "en-php-function-function-radius-request-authenticator"
language: "php"
lang: "en"
category: "function"
name: "radius_request_authenticator"
title: "Returns the request authenticator"
signature: "string radius_request_authenticator(resource $radius_handle)"
module: "radius"
source_url: "https://www.php.net/manual/en/function.radius-request-authenticator.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the request authenticator

## Description

```php
string radius_request_authenticator(resource $radius_handle)
```

The request authenticator is needed for demangling mangled data like passwords and encryption-keys.

## Parameters

- **`$radius_handle`** — The RADIUS resource.

## Return Values

Returns the request authenticator as string, or `false` on error.

## See Also

 `radius_demangle()`
