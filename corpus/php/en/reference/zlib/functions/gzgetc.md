---
id: "en-php-function-function-gzgetc"
language: "php"
lang: "en"
category: "function"
name: "gzgetc"
title: "Get character from gz-file pointer"
signature: "string|false gzgetc(resource $stream)"
module: "zlib"
source_url: "https://www.php.net/manual/en/function.gzgetc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get character from gz-file pointer

## Description

```php
string|false gzgetc(resource $stream)
```

Returns a string containing a single (uncompressed) character read from the given gz-file pointer.

## Parameters

- **`$stream`** — The gz-file pointer. It must be valid, and must point to a file successfully opened by `gzopen()`.

## Return Values

The uncompressed character or `false` on EOF (unlike `gzeof()`).

## Examples

**`gzgetc()` example**

```php


<?php
$gz = gzopen('somefile.gz', 'r');
while (!gzeof($gz)) {
  echo gzgetc($gz);
}
gzclose($gz);
?>

    
```

## See Also

`gzopen()` `gzgets()`
