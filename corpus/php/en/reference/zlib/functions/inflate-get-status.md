---
id: "en-php-function-function-inflate-get-status"
language: "php"
lang: "en"
category: "function"
name: "inflate_get_status"
title: "Get decompression status"
signature: "int inflate_get_status(InflateContext $context)"
module: "zlib"
source_url: "https://www.php.net/manual/en/function.inflate-get-status.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get decompression status

## Description

```php
int inflate_get_status(InflateContext $context)
```

Usually returns either `ZLIB_OK` or `ZLIB_STREAM_END`.

## Parameters

- **`$context`**

## Return Values

Returns decompression status.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$context` expects an `InflateContext` instance now; previously, a `resource` was expected. |
