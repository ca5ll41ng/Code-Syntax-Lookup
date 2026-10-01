---
id: "en-php-function-function-gzread"
language: "php"
lang: "en"
category: "function"
danger: {"type":"source"}
name: "gzread"
title: "Binary-safe gz-file read"
signature: "string|false gzread(resource $stream, int $length)"
module: "zlib"
source_url: "https://www.php.net/manual/en/function.gzread.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Binary-safe gz-file read

## Description

```php
string|false gzread(resource $stream, int $length)
```

`gzread()` reads up to `$length` bytes from the given gz-file pointer. Reading stops when `$length` (uncompressed) bytes have been read or EOF is reached, whichever comes first.

## Parameters

- **`$stream`** — The gz-file pointer. It must be valid, and must point to a file successfully opened by `gzopen()`.
- **`$length`** — The number of bytes to read.

## Return Values

The data that have been read, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 7.4.0 | This functions returns `false` on failure now; previously `0` was returned. |

## Examples

**`gzread()` example**

```php


<?php
// get contents of a gz-file into a string
$filename = "/usr/local/something.txt.gz";
$zd = gzopen($filename, "r");
$contents = gzread($zd, 10000);
gzclose($zd);
?>

    
```

## See Also

`gzwrite()` `gzopen()` `gzgets()` `gzgetss()` `gzfile()` `gzpassthru()`
