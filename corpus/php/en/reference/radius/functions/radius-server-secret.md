---
id: "en-php-function-function-radius-server-secret"
language: "php"
lang: "en"
category: "function"
name: "radius_server_secret"
title: "Returns the shared secret"
signature: "string radius_server_secret(resource $radius_handle)"
module: "radius"
source_url: "https://www.php.net/manual/en/function.radius-server-secret.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the shared secret

## Description

```php
string radius_server_secret(resource $radius_handle)
```

The shared secret is needed as salt for demangling mangled data like passwords and encryption-keys.

## Parameters

- **`$radius_handle`** — The RADIUS resource.

## Return Values

Returns the server's shared secret as string, or `false` on error.
