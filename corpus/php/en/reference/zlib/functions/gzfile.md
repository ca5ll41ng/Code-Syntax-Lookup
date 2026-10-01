---
id: "en-php-function-function-gzfile"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]}
name: "gzfile"
title: "Read entire gz-file into an array"
signature: "array|false gzfile(string $filename, bool $use_include_path = false)"
module: "zlib"
source_url: "https://www.php.net/manual/en/function.gzfile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Read entire gz-file into an array

## Description

```php
array|false gzfile(string $filename, bool $use_include_path = false)
```

This function is identical to `readgzfile()`, except that it returns the file in an array.

## Parameters

- **`$filename`** — The file name.
- **`$use_include_path`** — If set to `true`, files in the include_path are searched for too.

## Return Values

An array containing the file, one line per cell, empty lines included, and with newlines still attached, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | `$use_include_path` is now of type `bool`. Previously, it was of type `int`. |

## Examples

**`gzfile()` example**

```php


<?php
$lines = gzfile('somefile.gz');
foreach ($lines as $line) {
    echo $line;
}
?>

    
```

## See Also

`readgzfile()` `gzopen()`
