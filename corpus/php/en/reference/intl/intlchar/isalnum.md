---
id: "en-php-function-intlchar-isalnum"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::isalnum"
title: "Check if code point is an alphanumeric character"
signature: "public static bool|null IntlChar::isalnum(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.isalnum.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if code point is an alphanumeric character

## Description

```php
public static bool|null IntlChar::isalnum(int|string $codepoint)
```

Determines whether the specified code point is an alphanumeric character (letter or digit). `true` for characters with general categories "L" (letters) and "Nd" (decimal digit numbers).

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns `true` if `$codepoint` is an alphanumeric character, `false` if not. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::isalnum("A"));
var_dump(IntlChar::isalnum("1"));
var_dump(IntlChar::isalnum("\u{2603}"));
?>

   
```

The above example will output:

```text

    
bool(true)
bool(true)
bool(false)

   
```

## See Also

`IntlChar::isalpha()` `IntlChar::isdigit()` `ctype_alnum()`
