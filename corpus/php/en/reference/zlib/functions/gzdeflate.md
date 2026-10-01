---
id: "en-php-function-function-gzdeflate"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sanitizer"}
name: "gzdeflate"
title: "Deflate a string"
signature: "string|false gzdeflate(string $data, int $level = -1, int $encoding = ZLIB_ENCODING_RAW)"
module: "zlib"
source_url: "https://www.php.net/manual/en/function.gzdeflate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Deflate a string

## Description

```php
string|false gzdeflate(string $data, int $level = -1, int $encoding = ZLIB_ENCODING_RAW)
```

This function compresses the given string using the `DEFLATE` data format.

For details on the DEFLATE compression algorithm see the document "[DEFLATE Compressed Data Format Specification version 1.3](1951)" (RFC 1951).

## Parameters

- **`$data`** — The data to deflate.
- **`$level`** — The level of compression. Can be given as 0 for no compression up to 9 for maximum compression. If not given, the default compression level will be the default compression level of the zlib library.
- **`$encoding`** — One of `ZLIB_ENCODING_{*}` constants.

## Return Values

The deflated string or `false` if an error occurred.

## Examples

**`gzdeflate()` example**

```php


<?php
$compressed = gzdeflate('Compress me', 9);
echo $compressed;
?>

    
```

## See Also

`gzinflate()` `gzcompress()` `gzuncompress()` `gzencode()`
