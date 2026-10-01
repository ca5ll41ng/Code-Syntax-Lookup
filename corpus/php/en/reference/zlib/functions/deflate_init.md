---
id: "en-php-function-function-deflate-init"
language: "php"
lang: "en"
category: "function"
name: "deflate_init"
title: "Initialize an incremental deflate context"
signature: "DeflateContext|false deflate_init(int $encoding, array|object $options = [])"
module: "zlib"
source_url: "https://www.php.net/manual/en/function.deflate-init.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Initialize an incremental deflate context

## Description

 {{{ 

```php
DeflateContext|false deflate_init(int $encoding, array|object $options = [])
```

Initializes an incremental deflate context using the specified `$encoding`.

Note that the `window` option here only sets the window size of the algorithm, differently from the zlib filters where the same parameter also sets the encoding to use; the encoding must be set with the `$encoding` parameter.

Limitation: there is currently no way to set the header information on a GZIP compressed stream, which are set as follows: GZIP signature (`\x1f\x8B`); compression method (`\x08` == DEFLATE); 6 zero bytes; the operating system set to the current system (`\x00` = Windows, `\x03` = Unix, etc.)

 }}} 

## Parameters

 {{{ 

- **`$encoding`** — One of the `ZLIB_ENCODING_{*}` constants.
- **`$options`** — An associative array which may contain the following elements: - **`level`** — The compression level in range -1..9; defaults to -1. - **`memory`** — The compression memory level in range 1..9; defaults to 8. - **`window`** — The zlib window size (logarithmic) in range `8`..`15`; defaults to `15`. zlib changes a window size of `8` to `9`, and as of zlib 1.2.8 fails with a warning, if a window size of `8` is requested for `ZLIB_ENCODING_RAW` or `ZLIB_ENCODING_GZIP`. - **`strategy`** — One of `ZLIB_FILTERED`, `ZLIB_HUFFMAN_ONLY`, `ZLIB_RLE`, `ZLIB_FIXED` or `ZLIB_DEFAULT_STRATEGY` (the default). - **`dictionary`** — A `string` or an `array` of `strings` of the preset dictionary (default: no preset dictionary).

 }}} 

## Return Values

 {{{ 

Returns a deflate context resource (`zlib.deflate`) on success, or `false` on failure.

 }}} 

## Errors/Exceptions

 {{{ 

If an invalid option is passed to `$options` or the context couldn't be created, an error of level `E_WARNING` is generated.

 }}} 

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | On success, this function returns a `DeflateContext` instance now; previously, a `resource` was returned. |

## See Also

 {{{ 

 `deflate_add()` `inflate_init()` 

 }}}
