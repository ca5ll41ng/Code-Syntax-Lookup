---
id: "en-php-function-function-wddx-serialize-value"
language: "php"
lang: "en"
category: "function"
name: "wddx_serialize_value"
title: "Serialize a single value into a WDDX packet"
signature: "string wddx_serialize_value(mixed $var, [string $comment = ...])"
module: "wddx"
source_url: "https://www.php.net/manual/en/function.wddx-serialize-value.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Serialize a single value into a WDDX packet

## Description

```php
string wddx_serialize_value(mixed $var, [string $comment = ...])
```

Creates a WDDX packet from a single given value.

## Parameters

- **`$var`** — The value to be serialized
- **`$comment`** — An optional comment string that appears in the packet header.

## Return Values

Returns the WDDX packet, or `false` on error.
