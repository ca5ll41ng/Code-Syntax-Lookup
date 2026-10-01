---
id: "en-php-function-function-gzwrite"
language: "php"
lang: "en"
category: "function"
name: "gzwrite"
title: "Binary-safe gz-file write"
signature: "int|false gzwrite(resource $stream, string $data, int|null $length = null)"
module: "zlib"
source_url: "https://www.php.net/manual/en/function.gzwrite.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Binary-safe gz-file write

## Description

```php
int|false gzwrite(resource $stream, string $data, int|null $length = null)
```

`gzwrite()` writes the contents of `$data` to the given gz-file.

## Parameters

- **`$stream`** — The gz-file pointer. It must be valid, and must point to a file successfully opened by `gzopen()`.
- **`$data`** — The string to write.
- **`$length`** — The number of uncompressed bytes to write. If supplied, writing will stop after `$length` (uncompressed) bytes have been written or the end of `$data` is reached, whichever comes first.

## Return Values

Returns the number of (uncompressed) bytes written to the given gz-file stream, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$length` is nullable now; previously, the default was `0`. |
| 7.4.0 | This functions returns `false` on failure now; previously `0` was returned. |

## Examples

**`gzwrite()` example**

```php


<?php
$string = 'Some information to compress';
$gz = gzopen('somefile.gz','w9');
gzwrite($gz, $string);
gzclose($gz);
?>

    
```

## See Also

`gzread()` `gzopen()`
