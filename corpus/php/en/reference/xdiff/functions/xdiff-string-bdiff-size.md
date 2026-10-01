---
id: "en-php-function-function-xdiff-string-bdiff-size"
language: "php"
lang: "en"
category: "function"
name: "xdiff_string_bdiff_size"
title: "Read a size of file created by applying a binary diff"
signature: "int xdiff_string_bdiff_size(string $patch)"
module: "xdiff"
source_url: "https://www.php.net/manual/en/function.xdiff-string-bdiff-size.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Read a size of file created by applying a binary diff

## Description

```php
int xdiff_string_bdiff_size(string $patch)
```

Returns a size of a result file that would be created after applying binary `$patch` to the original file.

## Parameters

- **`$patch`** — The binary patch created by `xdiff_string_bdiff()` or `xdiff_string_rabdiff()` function.

## Return Values

Returns the size of file that would be created.

## Examples

**`xdiff_string_bdiff_size()` example**

The following code applies reads a size of file that would be created after applying a binary diff.

```php


<?php
$binary_patch = file_get_contents('file.bdiff');
$length = xdiff_string_bdiff_size($binary_patch);
echo "Resulting file will be $length bytes long";
?>

    
```

## See Also

`xdiff_string_bdiff()` `xdiff_string_rabdiff()` `xdiff_string_bpatch()`
