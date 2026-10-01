---
id: "en-php-function-function-xdiff-string-bdiff"
language: "php"
lang: "en"
category: "function"
name: "xdiff_string_bdiff"
title: "Make binary diff of two strings"
signature: "string xdiff_string_bdiff(string $old_data, string $new_data)"
module: "xdiff"
source_url: "https://www.php.net/manual/en/function.xdiff-string-bdiff.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Make binary diff of two strings

## Description

```php
string xdiff_string_bdiff(string $old_data, string $new_data)
```

Makes a binary diff of two strings and returns the result. This function works with both text and binary data. Resulting patch can be later applied using `xdiff_string_bpatch()`/`xdiff_file_bpatch()`.

## Parameters

- **`$old_data`** — First string with binary data. It acts as "old" data.
- **`$new_data`** — Second string with binary data. It acts as "new" data.

## Return Values

Returns string with binary diff containing differences between "old" and "new" data or `false` if an internal error occurred.

## See Also

`xdiff_string_bpatch()`
