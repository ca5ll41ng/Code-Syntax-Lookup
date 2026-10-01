---
id: "en-php-function-function-gzgetss"
language: "php"
lang: "en"
category: "function"
name: "gzgetss"
title: "Get line from gz-file pointer and strip HTML tags"
signature: "string gzgetss(resource $zp, int $length, [string $allowable_tags = ...])"
module: "zlib"
source_url: "https://www.php.net/manual/en/function.gzgetss.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get line from gz-file pointer and strip HTML tags

## Description

```php
string gzgetss(resource $zp, int $length, [string $allowable_tags = ...])
```

Identical to `gzgets()`, except that `gzgetss()` attempts to strip any HTML and PHP tags from the text it reads.

## Parameters

- **`$zp`** — The gz-file pointer. It must be valid, and must point to a file successfully opened by `gzopen()`.
- **`$length`** — The length of data to get.
- **`$allowable_tags`** — You can use this optional parameter to specify tags which should not be stripped.

## Return Values

The uncompressed and stripped string, or `false` on error.

## Examples

**`gzgetss()` example**

```php


<?php
$handle = gzopen('somefile.gz', 'r');
while (!gzeof($handle)) {
   $buffer = gzgetss($handle, 4096);
   echo $buffer;
}
gzclose($handle);
?> 

    
```

## See Also

`gzopen()` `gzgets()` `strip_tags()`
