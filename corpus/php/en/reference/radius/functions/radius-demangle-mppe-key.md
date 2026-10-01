---
id: "en-php-function-function-radius-demangle-mppe-key"
language: "php"
lang: "en"
category: "function"
name: "radius_demangle_mppe_key"
title: "Derives mppe-keys from mangled data"
signature: "string radius_demangle_mppe_key(resource $radius_handle, string $mangled)"
module: "radius"
source_url: "https://www.php.net/manual/en/function.radius-demangle-mppe-key.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Derives mppe-keys from mangled data

## Description

```php
string radius_demangle_mppe_key(resource $radius_handle, string $mangled)
```

When using MPPE with MS-CHAPv2, the send- and recv-keys are mangled (see [RFC 2548](2548)), however this function is useless, because I don't think that there is or will be a PPTP-MPPE implementation in PHP.

## Parameters

- **`$radius_handle`** — The RADIUS resource.
- **`$mangled`** — The mangled data to demangle

## Return Values

Returns the demangled string, or `false` on error.
