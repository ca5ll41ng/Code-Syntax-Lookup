---
id: "en-php-function-function-xdiff-string-diff-binary"
language: "php"
lang: "en"
category: "function"
name: "xdiff_string_diff_binary"
title: " `xdiff_string_bdiff()`"
signature: "string xdiff_string_bdiff(string $old_data, string $new_data)"
module: "xdiff"
source_url: "https://www.php.net/manual/en/function.xdiff-string-diff-binary.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

#  `xdiff_string_bdiff()`

## Description

```php
string xdiff_string_bdiff(string $old_data, string $new_data)
```

Makes a binary diff of two strings and returns the result. This function works with both text and binary data. Resulting patch can be later applied using `xdiff_string_bpatch()`/`xdiff_file_bpatch()`.

Starting with version 1.5.0 this function is an alias of `xdiff_string_bdiff()`.

## Parameters

- **`$old_data`** — First string with binary data. It acts as "old" data.
- **`$new_data`** — Second string with binary data. It acts as "new" data.

## Return Values

Returns string with result or `false` if an internal error happened.

## See Also

`xdiff_string_bdiff()` `xdiff_string_bpatch()`
