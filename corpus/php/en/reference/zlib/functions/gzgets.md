---
id: "en-php-function-function-gzgets"
language: "php"
lang: "en"
category: "function"
name: "gzgets"
title: "Get line from file pointer"
signature: "string|false gzgets(resource $stream, int|null $length = null)"
module: "zlib"
source_url: "https://www.php.net/manual/en/function.gzgets.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get line from file pointer

## Description

```php
string|false gzgets(resource $stream, int|null $length = null)
```

Gets a (uncompressed) string of up to length - 1 bytes read from the given file pointer. Reading ends when length - 1 bytes have been read, on a newline, or on EOF (whichever comes first).

## Parameters

- **`$stream`** — The gz-file pointer. It must be valid, and must point to a file successfully opened by `gzopen()`.
- **`$length`** — The length of data to get.

## Return Values

The uncompressed string, or `false` on error.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$length` is nullable now; previously, the default was `1024`. |

## Examples

**`gzgets()` example**

```php


<?php
$handle = gzopen('somefile.gz', 'r');
while (!gzeof($handle)) {
   $buffer = gzgets($handle, 4096);
   echo $buffer;
}
gzclose($handle);
?> 

    
```

## See Also

`gzopen()` `gzgetc()` `gzwrite()`
