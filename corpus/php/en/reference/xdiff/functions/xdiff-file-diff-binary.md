---
id: "en-php-function-function-xdiff-file-diff-binary"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[3]}
name: "xdiff_file_diff_binary"
title: " `xdiff_file_bdiff()`"
signature: "bool xdiff_file_diff_binary(string $old_file, string $new_file, string $dest)"
module: "xdiff"
source_url: "https://www.php.net/manual/en/function.xdiff-file-diff-binary.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

#  `xdiff_file_bdiff()`

## Description

```php
bool xdiff_file_diff_binary(string $old_file, string $new_file, string $dest)
```

Makes a binary diff of two files and stores the result in a patch file. This function works with both text and binary files. Resulting patch file can be later applied using `xdiff_file_bpatch()`.

Starting with version 1.5.0 this function is an alias of `xdiff_file_bdiff()`.

## Parameters

- **`$old_file`** — Path to the first file. This file acts as "old" file.
- **`$new_file`** — Path to the second file. This file acts as "new" file.
- **`$dest`** — Path of the resulting patch file. Resulting file contains differences between "old" and "new" files. It is in binary format and is human-unreadable.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`xdiff_file_diff_binary()` example**

The following code makes binary diff of two archives.

```php


<?php
$old_version = 'my_script_1.0.tgz';
$new_version = 'my_script_1.1.tgz';

xdiff_file_diff_binary($old_version, $new_version, 'my_script.bdiff');
?>

    
```

## Notes

> Both files will be loaded into memory so ensure that your memory_limit is set high enough.

## See Also

`xdiff_file_bdiff()` `xdiff_file_bpatch()`
