---
id: "en-php-function-function-inflate-get-read-len"
language: "php"
lang: "en"
category: "function"
name: "inflate_get_read_len"
title: "Get number of bytes read so far"
signature: "int inflate_get_read_len(InflateContext $context)"
module: "zlib"
source_url: "https://www.php.net/manual/en/function.inflate-get-read-len.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get number of bytes read so far

## Description

```php
int inflate_get_read_len(InflateContext $context)
```

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$context`**

## Return Values

Returns number of bytes read so far or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$context` expects an `InflateContext` instance now; previously, a `resource` was expected. |
