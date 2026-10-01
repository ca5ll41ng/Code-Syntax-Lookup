---
id: "en-php-function-function-xdiff-file-diff"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[3]}
name: "xdiff_file_diff"
title: "Make unified diff of two files"
signature: "bool xdiff_file_diff(string $old_file, string $new_file, string $dest, int $context = 3, bool $minimal = false)"
module: "xdiff"
source_url: "https://www.php.net/manual/en/function.xdiff-file-diff.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Make unified diff of two files

## Description

```php
bool xdiff_file_diff(string $old_file, string $new_file, string $dest, int $context = 3, bool $minimal = false)
```

Makes an unified diff containing differences between `$old_file` and `$new_file` and stores it in `$dest` file. The resulting file is human-readable. An optional `$context` parameter specifies how many lines of context should be added around each change. Setting `$minimal` parameter to true will result in outputting the shortest patch file possible (can take a long time).

## Parameters

- **`$old_file`** — Path to the first file. This file acts as "old" file.
- **`$new_file`** — Path to the second file. This file acts as "new" file.
- **`$dest`** — Path of the resulting patch file.
- **`$context`** — Indicates how many lines of context you want to include in diff result.
- **`$minimal`** — Set this parameter to `true` if you want to minimalize size of the result (can take a long time).

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`xdiff_file_diff()` example**

The following code makes unified diff of two php files with context length of 2.

```php


<?php
$old_version = 'my_script.php';
$new_version = 'my_new_script.php';

xdiff_file_diff($old_version, $new_version, 'my_script.diff', 2);
?>

    
```

## Notes

> This function doesn't work well with binary files. To make diff of binary files use `xdiff_file_bdiff()`/`xdiff_file_rabdiff()` function.

## See Also

`xdiff_file_patch()`
