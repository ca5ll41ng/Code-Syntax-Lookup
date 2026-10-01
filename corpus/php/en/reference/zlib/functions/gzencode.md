---
id: "en-php-function-function-gzencode"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sanitizer"}
name: "gzencode"
title: "Create a gzip compressed string"
signature: "string|false gzencode(string $data, int $level = -1, int $encoding = ZLIB_ENCODING_GZIP)"
module: "zlib"
source_url: "https://www.php.net/manual/en/function.gzencode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a gzip compressed string

## Description

```php
string|false gzencode(string $data, int $level = -1, int $encoding = ZLIB_ENCODING_GZIP)
```

This function returns a compressed version of the input `$data` compatible with the output of the gzip program.

For more information on the GZIP file format, see the document: [GZIP file format specification version 4.3](1952) (RFC 1952).

## Parameters

- **`$data`** — The data to encode.
- **`$level`** — The level of compression. Can be given as 0 for no compression up to 9 for maximum compression. If not given, the default compression level will be the default compression level of the zlib library.
- **`$encoding`** — The encoding mode. Can be `FORCE_GZIP` (the default) or `FORCE_DEFLATE`. — `FORCE_DEFLATE` generates RFC 1950 compliant output, consisting of a zlib header, the deflated data, and an Adler checksum.

## Return Values

The encoded string, or `false` if an error occurred.

## Examples

The resulting data contains the appropriate headers and data structure to make a standard .gz file, e.g.:

**Creating a gzip file**

```php


<?php
$data = file_get_contents("bigfile.txt");
$gzdata = gzencode($data, 9);
file_put_contents("bigfile.txt.gz", $gzdata);
?>

    
```

## See Also

`gzdecode()` `gzdeflate()` `gzinflate()` `gzuncompress()` `gzcompress()` [ZLIB Compressed Data Format Specification (RFC 1950)](1950)
