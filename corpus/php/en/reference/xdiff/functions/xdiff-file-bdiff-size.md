---
id: "en-php-function-function-xdiff-file-bdiff-size"
language: "php"
lang: "en"
category: "function"
name: "xdiff_file_bdiff_size"
title: "Read a size of file created by applying a binary diff"
signature: "int xdiff_file_bdiff_size(string $file)"
module: "xdiff"
source_url: "https://www.php.net/manual/en/function.xdiff-file-bdiff-size.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Read a size of file created by applying a binary diff

## Description

```php
int xdiff_file_bdiff_size(string $file)
```

Returns a size of a result file that would be created after applying binary patch from file `$file` to the original file.

## Parameters

- **`$file`** — The path to the binary patch created by `xdiff_string_bdiff()` or `xdiff_string_rabdiff()` function.

## Return Values

Returns the size of file that would be created.

## Examples

**`xdiff_file_bdiff_size()` example**

The following code applies reads a size of file that would be created after applying a binary diff.

```php


<?php
$length = xdiff_string_bdiff_size('file.bdiff');
echo "Resulting file will be $length bytes long";
?>

    
```

## See Also

`xdiff_file_bdiff()` `xdiff_file_rabdiff()` `xdiff_file_bpatch()`
