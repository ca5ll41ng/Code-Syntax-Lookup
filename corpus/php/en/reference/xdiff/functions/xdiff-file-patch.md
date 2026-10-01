---
id: "en-php-function-function-xdiff-file-patch"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[3]}
name: "xdiff_file_patch"
title: "Patch a file with an unified diff"
signature: "mixed xdiff_file_patch(string $file, string $patch, string $dest, int $flags = DIFF_PATCH_NORMAL)"
module: "xdiff"
source_url: "https://www.php.net/manual/en/function.xdiff-file-patch.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Patch a file with an unified diff

## Description

```php
mixed xdiff_file_patch(string $file, string $patch, string $dest, int $flags = DIFF_PATCH_NORMAL)
```

Patches a `$file` with a `$patch` and stores the result in a file. `$patch` has to be an unified diff created by `xdiff_file_diff()`/`xdiff_string_diff()` function. An optional `$flags` parameter specifies mode of operation.

## Parameters

- **`$file`** — The original file.
- **`$patch`** — The unified patch file. It has to be created using `xdiff_string_diff()`, `xdiff_file_diff()` functions or compatible tools.
- **`$dest`** — Path of the resulting file.
- **`$flags`** — Can be either `XDIFF_PATCH_NORMAL` (default mode, normal patch) or `XDIFF_PATCH_REVERSE` (reversed patch). — Starting from version 1.5.0, you can also use binary OR to enable `XDIFF_PATCH_IGNORESPACE` flag.

## Return Values

Returns `false` if an internal error happened, string with rejected chunks if patch couldn't be applied or `true` if patch has been successfully applied.

## Examples

**`xdiff_file_patch()` example**

The following code applies unified diff to a file.

```php


<?php
$old_version = 'my_script-1.0.php';
$patch = 'my_script.patch';

$errors = xdiff_file_patch($old_version, $patch, 'my_script-1.1.php');
if (is_string($errors)) {
   echo "Rejects:\n";
   echo $errors;
}

?>

    
```

**Patch reversing example**

The following code reverses a patch.

```php


<?php
$new_version = 'my_script-1.1.php';
$patch = 'my_script.patch';

$errors = xdiff_file_patch($new_version, $patch, 'my_script-1.0.php', XDIFF_PATCH_REVERSE);
if (is_string($errors)) {
   echo "Rejects:\n";
   echo $errors;
}

?>

    
```

## See Also

`xdiff_file_diff()`
