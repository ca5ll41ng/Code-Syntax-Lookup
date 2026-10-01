---
id: "en-php-function-function-gzcompress"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sanitizer"}
name: "gzcompress"
title: "Compress a string"
signature: "string|false gzcompress(string $data, int $level = -1, int $encoding = ZLIB_ENCODING_DEFLATE)"
module: "zlib"
source_url: "https://www.php.net/manual/en/function.gzcompress.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Compress a string

## Description

```php
string|false gzcompress(string $data, int $level = -1, int $encoding = ZLIB_ENCODING_DEFLATE)
```

This function compresses the given string using the `ZLIB` data format.

For details on the ZLIB compression algorithm see the document "[ZLIB Compressed Data Format Specification version 3.3](1950)" (RFC 1950).

> This is *not* the same as gzip compression, which includes some header data. See `gzencode()` for gzip compression.

## Parameters

- **`$data`** — The data to compress.
- **`$level`** — The level of compression. Can be given as 0 for no compression up to 9 for maximum compression. — If -1 is used, the default compression of the zlib library is used which is 6.
- **`$encoding`** — One of `ZLIB_ENCODING_{*}` constants.

## Return Values

The compressed string or `false` if an error occurred.

## Examples

**`gzcompress()` example**

```php


<?php
$compressed = gzcompress('Compress me', 9);
echo $compressed;
?>

    
```

## See Also

`gzdeflate()` `gzinflate()` `gzuncompress()` `gzencode()`
