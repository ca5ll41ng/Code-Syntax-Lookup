---
id: "en-php-function-function-xdiff-string-rabdiff"
language: "php"
lang: "en"
category: "function"
name: "xdiff_string_rabdiff"
title: "Make a binary diff of two strings using the Rabin's polynomial fingerprinting algorithm"
signature: "string|false xdiff_string_rabdiff(string $old_data, string $new_data)"
module: "xdiff"
source_url: "https://www.php.net/manual/en/function.xdiff-string-rabdiff.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Make a binary diff of two strings using the Rabin's polynomial fingerprinting algorithm

## Description

```php
string|false xdiff_string_rabdiff(string $old_data, string $new_data)
```

Makes a binary diff of two strings using the Rabin's polynomial fingerprinting algorithm implemented by [libxdiff](). Compared to `xdiff_string_bdiff()`, this algorithm generally produces smaller diffs and operates faster, while remaining fully compatible with `xdiff_string_bpatch()` and `xdiff_file_bpatch()` for applying patches.

This function can be used with both text and binary data. The resulting diff data can later be applied to recreate the new version from the old one.

For further information about the algorithm, see the [libxdiff documentation](https://www.xmailserver.org/xdiff-lib.html).

## Parameters

- **`$old_data`** — The first string containing the "old" binary data.
- **`$new_data`** — The second string containing the "new" binary data.

## Return Values

Returns a binary diff string containing the differences between the old and new data, or `false` on failure.

## Examples

**Creation of a binary diff between two strings**

```php

     
<?php
$old = file_get_contents('file_v1.txt');
$new = file_get_contents('file_v2.txt');

$diff = xdiff_string_rabdiff($old, $new);
file_put_contents('patch.rdiff', $diff);
?>

    
```

## See Also

`xdiff_string_bdiff()` `xdiff_string_bpatch()` `xdiff_file_bpatch()`
