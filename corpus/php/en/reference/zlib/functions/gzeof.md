---
id: "en-php-function-function-gzeof"
language: "php"
lang: "en"
category: "function"
name: "gzeof"
title: "Test for EOF on a gz-file pointer"
signature: "bool gzeof(resource $stream)"
module: "zlib"
source_url: "https://www.php.net/manual/en/function.gzeof.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Test for EOF on a gz-file pointer

## Description

```php
bool gzeof(resource $stream)
```

Tests the given GZ file pointer for EOF.

## Parameters

- **`$stream`** — The gz-file pointer. It must be valid, and must point to a file successfully opened by `gzopen()`.

## Return Values

Returns `true` if the gz-file pointer is at EOF or an error occurs; otherwise returns `false`.

## Examples

**`gzeof()` example**

```php


<?php
$gz = gzopen('somefile.gz', 'r');
while (!gzeof($gz)) {
  echo gzgetc($gz);
}
gzclose($gz);
?>

    
```
