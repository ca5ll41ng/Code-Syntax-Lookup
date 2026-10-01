---
id: "en-php-function-function-xdiff-file-merge3"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[4]}
name: "xdiff_file_merge3"
title: "Merge 3 files into one"
signature: "mixed xdiff_file_merge3(string $old_file, string $new_file1, string $new_file2, string $dest)"
module: "xdiff"
source_url: "https://www.php.net/manual/en/function.xdiff-file-merge3.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Merge 3 files into one

## Description

```php
mixed xdiff_file_merge3(string $old_file, string $new_file1, string $new_file2, string $dest)
```

Merges three files into one and stores the result in a file `$dest`. The `$old_file` is an original version while `$new_file1` and `$new_file2` are modified versions of an original.

## Parameters

- **`$old_file`** — Path to the first file. It acts as "old" file.
- **`$new_file1`** — Path to the second file. It acts as modified version of `$old_file`.
- **`$new_file2`** — Path to the third file. It acts as modified version of `$old_file`.
- **`$dest`** — Path of the resulting file, containing merged changed from both `$new_file1` and `$new_file2`.

## Return Values

Returns `true` if merge was successful, string with rejected chunks if it was not or `false` if an internal error happened.

## Examples

**`xdiff_file_merge3()` example**

The following code merges three files into one.

```php


<?php
$old_version = 'original_script.php';
$fix1 = 'script_with_fix1.php';
$fix2 = 'script_with_fix2.php';

$errors = xdiff_file_merge3($old_version, $fix1, $fix2, 'fixed_script.php');
if (is_string($errors)) {
    echo "Rejects:\n";
    echo $errors;
}
?>

    
```

## See Also

`xdiff_string_merge3()`
