---
id: "en-php-function-function-deflate-add"
language: "php"
lang: "en"
category: "function"
name: "deflate_add"
title: "Incrementally deflate data"
signature: "string|false deflate_add(DeflateContext $context, string $data, int $flush_mode = ZLIB_SYNC_FLUSH)"
module: "zlib"
source_url: "https://www.php.net/manual/en/function.deflate-add.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Incrementally deflate data

## Description

 {{{ 

```php
string|false deflate_add(DeflateContext $context, string $data, int $flush_mode = ZLIB_SYNC_FLUSH)
```

Incrementally deflates data in the specified context.

 }}} 

## Parameters

 {{{ 

- **`$context`** — A context created with `deflate_init()`.
- **`$data`** — A chunk of data to compress.
- **`$flush_mode`** — One of `ZLIB_BLOCK`, `ZLIB_NO_FLUSH`, `ZLIB_PARTIAL_FLUSH`, `ZLIB_SYNC_FLUSH` (default), `ZLIB_FULL_FLUSH`, `ZLIB_FINISH`. Normally you will want to set `ZLIB_NO_FLUSH` to maximize compression, and `ZLIB_FINISH` to terminate with the last chunk of data. See the [zlib manual]() for a detailed description of these constants.

 }}} 

## Return Values

 {{{ 

Returns a chunk of compressed data, or `false` on failure.

 }}} 

## Errors/Exceptions

 {{{ 

If invalid arguments are given, an error of level `E_WARNING` is generated.

 }}} 

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$context` expects a `DeflateContext` instance now; previously, a `resource` was expected. |

## See Also

 {{{ 

 `deflate_init()` 

 }}}
