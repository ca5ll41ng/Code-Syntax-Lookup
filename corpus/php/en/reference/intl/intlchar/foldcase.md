---
id: "en-php-function-intlchar-foldcase"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::foldCase"
title: "Perform case folding on a code point"
signature: "public static int|string|null IntlChar::foldCase(int|string $codepoint, int $options = IntlChar::FOLD_CASE_DEFAULT)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.foldcase.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Perform case folding on a code point

## Description

```php
public static int|string|null IntlChar::foldCase(int|string $codepoint, int $options = IntlChar::FOLD_CASE_DEFAULT)
```

The given character is mapped to its case folding equivalent; if the character has no case folding equivalent, the character itself is returned.

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)
- **`$options`** — Either `IntlChar::FOLD_CASE_DEFAULT` (default) or `IntlChar::FOLD_CASE_EXCLUDE_SPECIAL_I`.

## Return Values

Returns the *Simple_Case_Folding* of the code point, if any; otherwise the code point itself on success, or `null` on failure.
