---
id: "en-php-function-function-inflate-init"
language: "php"
lang: "en"
category: "function"
name: "inflate_init"
title: "Initialize an incremental inflate context"
signature: "InflateContext|false inflate_init(int $encoding, array|object $options = [])"
module: "zlib"
source_url: "https://www.php.net/manual/en/function.inflate-init.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Initialize an incremental inflate context

## Description

 {{{ 

```php
InflateContext|false inflate_init(int $encoding, array|object $options = [])
```

Initialize an incremental inflate context with the specified `$encoding`.

 }}} 

## Parameters

 {{{ 

- **`$encoding`** — One of the `ZLIB_ENCODING_{*}` constants.
- **`$options`** — An associative array which may contain the following elements: - **`level`** — The compression level in range -1..9; defaults to -1. - **`memory`** — The compression memory level in range 1..9; defaults to 8. - **`window`** — The zlib window size (logarithmic) in range 8..15; defaults to 15. - **`strategy`** — One of `ZLIB_FILTERED`, `ZLIB_HUFFMAN_ONLY`, `ZLIB_RLE`, `ZLIB_FIXED` or `ZLIB_DEFAULT_STRATEGY` (the default). - **`dictionary`** — A `string` or an `array` of `strings` of the preset dictionary (default: no preset dictionary).

 }}} 

## Return Values

 {{{ 

Returns an inflate context resource (`zlib.inflate`) on success, or `false` on failure.

 }}} 

## Errors/Exceptions

 {{{ 

If an invalid encoding or option is passed to `$options`, or the context couldn't be created, an error of level `E_WARNING` is generated.

 }}} 

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | On success, this function returns an `InflateContext` instance now; previously, a `resource` was returned. |

## Notes

> Unlike `gzinflate()`, incremental inflate contexts do not constrain the length of the decoded data, so provide no automatic protection against Zip bombs.

## See Also

 {{{ 

 `inflate_add()` `deflate_init()` 

 }}}
