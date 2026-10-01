---
id: "en-php-function-function-gzdecode"
language: "php"
lang: "en"
category: "function"
name: "gzdecode"
title: "Decodes a gzip compressed string"
signature: "string|false gzdecode(string $data, int $max_length = 0)"
module: "zlib"
source_url: "https://www.php.net/manual/en/function.gzdecode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Decodes a gzip compressed string

## Description

```php
string|false gzdecode(string $data, int $max_length = 0)
```

This function returns a decoded version of the input `$data`.

## Parameters

- **`$data`** — The data to decode, encoded by `gzencode()`.
- **`$max_length`** — The maximum length of data to decode.

## Return Values

The decoded string, or or `false` on failure.

## Errors/Exceptions

In case of failure, an `E_WARNING` level error is issued.

## See Also

`gzencode()`
