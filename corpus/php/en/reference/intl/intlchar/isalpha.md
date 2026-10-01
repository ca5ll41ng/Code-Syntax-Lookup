---
id: "en-php-function-intlchar-isalpha"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::isalpha"
title: "Check if code point is a letter character"
signature: "public static bool|null IntlChar::isalpha(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.isalpha.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if code point is a letter character

## Description

```php
public static bool|null IntlChar::isalpha(int|string $codepoint)
```

Determines whether the specified code point is a letter character. `true` for general categories "L" (letters).

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns `true` if `$codepoint` is a letter character, `false` if not. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::isalpha("A"));
var_dump(IntlChar::isalpha("1"));
var_dump(IntlChar::isalpha("\u{2603}"));
?>

   
```

The above example will output:

```text

    
bool(true)
bool(false)
bool(false)

   
```

## See Also

`IntlChar::isalnum()` `IntlChar::isdigit()` `ctype_alpha()`
