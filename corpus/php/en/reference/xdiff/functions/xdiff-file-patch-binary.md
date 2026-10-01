---
id: "en-php-function-function-xdiff-file-patch-binary"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[3]}
name: "xdiff_file_patch_binary"
title: " `xdiff_file_bpatch()`"
signature: "bool xdiff_file_patch_binary(string $file, string $patch, string $dest)"
module: "xdiff"
source_url: "https://www.php.net/manual/en/function.xdiff-file-patch-binary.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

#  `xdiff_file_bpatch()`

## Description

```php
bool xdiff_file_patch_binary(string $file, string $patch, string $dest)
```

Patches a `$file` with a binary `$patch` and stores the result in a file `$dest`. This function accepts patches created both via `xdiff_file_bdiff()` or `xdiff_file_rabdiff()` functions or their string counterparts.

Starting with version 1.5.0 this function is an alias of `xdiff_file_bpatch()`.

## Parameters

- **`$file`** — The original file.
- **`$patch`** — The binary patch file.
- **`$dest`** — Path of the resulting file.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`xdiff_file_patch_binary()` example**

The following code applies binary diff to a file.

```php


<?php
$old_version = 'archive-1.0.tgz';
$patch = 'archive.bpatch';

$result = xdiff_file_patch_binary($old_version, $patch, 'archive-1.1.tgz');
if ($result) {
   echo "File patched";
} else {
   echo "File couldn't be patched";
}

?>

    
```

## Notes

> Both files (`$file` and `$patch`) will be loaded into memory so ensure that your memory_limit is set high enough.

## See Also

`xdiff_string_patch_binary()`
