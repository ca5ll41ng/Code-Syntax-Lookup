---
id: "en-php-function-function-xdiff-string-bpatch"
language: "php"
lang: "en"
category: "function"
name: "xdiff_string_bpatch"
title: "Patch a string with a binary diff"
signature: "string xdiff_string_bpatch(string $str, string $patch)"
module: "xdiff"
source_url: "https://www.php.net/manual/en/function.xdiff-string-bpatch.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Patch a string with a binary diff

## Description

```php
string xdiff_string_bpatch(string $str, string $patch)
```

Patches a string `$str` with a binary `$patch`. This function accepts patches created both via `xdiff_string_bdiff()` and `xdiff_string_rabdiff()` functions or their file counterparts.

## Parameters

- **`$str`** — The original binary string.
- **`$patch`** — The binary patch string.

## Return Values

Returns the patched string, or `false` on error.

## See Also

`xdiff_string_bdiff()` `xdiff_string_rabdiff()`
