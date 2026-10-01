---
id: "en-php-function-function-radius-demangle"
language: "php"
lang: "en"
category: "function"
name: "radius_demangle"
title: "Demangles data"
signature: "string radius_demangle(resource $radius_handle, string $mangled)"
module: "radius"
source_url: "https://www.php.net/manual/en/function.radius-demangle.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Demangles data

## Description

```php
string radius_demangle(resource $radius_handle, string $mangled)
```

Some data (Passwords, MS-CHAPv1 MPPE-Keys) is mangled for security reasons, and must be demangled before you can use them.

## Parameters

- **`$radius_handle`** — The RADIUS resource.
- **`$mangled`** — The mangled data to demangle

## Return Values

Returns the demangled string, or `false` on error.
