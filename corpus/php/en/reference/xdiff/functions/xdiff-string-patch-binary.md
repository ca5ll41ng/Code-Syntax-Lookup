---
id: "en-php-function-function-xdiff-string-patch-binary"
language: "php"
lang: "en"
category: "function"
name: "xdiff_string_patch_binary"
title: " `xdiff_string_bpatch()`"
signature: "string xdiff_string_patch_binary(string $str, string $patch)"
module: "xdiff"
source_url: "https://www.php.net/manual/en/function.xdiff-string-patch-binary.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

#  `xdiff_string_bpatch()`

## Description

```php
string xdiff_string_patch_binary(string $str, string $patch)
```

Patches a string `$str` with a binary `$patch`. This function accepts patches created both via `xdiff_string_bdiff()` and `xdiff_string_rabdiff()` functions or their file counterparts.

Starting with version 1.5.0 this function is an alias of `xdiff_string_bpatch()`.

## Parameters

- **`$str`** — The original binary string.
- **`$patch`** — The binary patch string.

## Return Values

Returns the patched string, or `false` on error.

## See Also

`xdiff_string_bpatch()` `xdiff_string_bdiff()` `xdiff_string_rabdiff()`
