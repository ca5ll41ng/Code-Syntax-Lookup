---
id: "en-php-function-function-gzpassthru"
language: "php"
lang: "en"
category: "function"
name: "gzpassthru"
title: "Output all remaining data on a gz-file pointer"
signature: "int gzpassthru(resource $stream)"
module: "zlib"
source_url: "https://www.php.net/manual/en/function.gzpassthru.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Output all remaining data on a gz-file pointer

## Description

```php
int gzpassthru(resource $stream)
```

Reads to EOF on the given gz-file pointer from the current position and writes the (uncompressed) results to standard output.

> You may need to call `gzrewind()` to reset the file pointer to the beginning of the file if you have already written data to it.

> If you just want to dump the contents of a file to the output buffer, without first modifying it or seeking to a particular offset, you may want to use the `readgzfile()` function, which saves you the `gzopen()` call.

## Parameters

- **`$stream`** — The gz-file pointer. It must be valid, and must point to a file successfully opened by `gzopen()`.

## Return Values

The number of uncompressed characters read from `$gz` and passed through to the input.

## Examples

**`gzpassthru()` example**

```php


<?php
$fp = gzopen('file.gz', 'r');
gzpassthru($fp);
gzclose($fp);
?>

    
```
