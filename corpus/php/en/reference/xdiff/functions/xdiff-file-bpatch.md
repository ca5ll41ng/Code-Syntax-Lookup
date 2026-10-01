---
id: "en-php-function-function-xdiff-file-bpatch"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[3]}
name: "xdiff_file_bpatch"
title: "Patch a file with a binary diff"
signature: "bool xdiff_file_bpatch(string $file, string $patch, string $dest)"
module: "xdiff"
source_url: "https://www.php.net/manual/en/function.xdiff-file-bpatch.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Patch a file with a binary diff

## Description

```php
bool xdiff_file_bpatch(string $file, string $patch, string $dest)
```

Patches a `$file` with a binary `$patch` and stores the result in a file `$dest`. This function accepts patches created both via `xdiff_file_bdiff()` and `xdiff_file_rabdiff()` functions or their string counterparts.

## Parameters

- **`$file`** — The original file.
- **`$patch`** — The binary patch file.
- **`$dest`** — Path of the resulting file.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`xdiff_file_bpatch()` example**

The following code applies binary diff to a file.

```php


<?php
$old_version = 'archive-1.0.tgz';
$patch = 'archive.bpatch';

$result = xdiff_file_bpatch($old_version, $patch, 'archive-1.1.tgz');
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

`xdiff_file_bdiff()` `xdiff_file_rabdiff()`
