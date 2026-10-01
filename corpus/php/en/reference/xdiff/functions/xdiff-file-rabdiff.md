---
id: "en-php-function-function-xdiff-file-rabdiff"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[3]}
name: "xdiff_file_rabdiff"
title: "Make binary diff of two files using the Rabin's polynomial fingerprinting algorithm"
signature: "bool xdiff_file_rabdiff(string $old_file, string $new_file, string $dest)"
module: "xdiff"
source_url: "https://www.php.net/manual/en/function.xdiff-file-rabdiff.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Make binary diff of two files using the Rabin's polynomial fingerprinting algorithm

## Description

```php
bool xdiff_file_rabdiff(string $old_file, string $new_file, string $dest)
```

Makes a binary diff of two files and stores the result in a patch file. The difference between this function and `xdiff_file_bdiff()` is different algorithm used which should result in faster execution and smaller diff produced. This function works with both text and binary files. Resulting patch file can be later applied using `xdiff_file_bpatch()`/`xdiff_string_bpatch()`.

For more details about differences between algorithm used please check [libxdiff]() website.

## Parameters

- **`$old_file`** — Path to the first file. This file acts as "old" file.
- **`$new_file`** — Path to the second file. This file acts as "new" file.
- **`$dest`** — Path of the resulting patch file. Resulting file contains differences between "old" and "new" files. It is in binary format and is human-unreadable.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`xdiff_file_rabdiff()` example**

The following code makes binary diff of two archives.

```php


<?php
$old_version = 'my_script_1.0.tgz';
$new_version = 'my_script_1.1.tgz';

xdiff_file_rabdiff($old_version, $new_version, 'my_script.bdiff');
?>

    
```

## Notes

> Both files will be loaded into memory so ensure that your memory_limit is set high enough.

## See Also

`xdiff_file_bpatch()`
