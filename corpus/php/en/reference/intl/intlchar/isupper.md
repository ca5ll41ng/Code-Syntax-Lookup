---
id: "en-php-function-intlchar-isupper"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::isupper"
title: "Check if code point has the general category \"Lu\" (uppercase letter)"
signature: "public static bool|null IntlChar::isupper(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.isupper.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if code point has the general category "Lu" (uppercase letter)

## Description

```php
public static bool|null IntlChar::isupper(int|string $codepoint)
```

Determines whether the specified code point has the general category "Lu" (uppercase letter).

> This misses some characters that are also uppercase but have a different general category value. In order to include those, use `IntlChar::isUUppercase()`.

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns `true` if `$codepoint` is an Lu uppercase letter, `false` if not. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::isupper("A"));
var_dump(IntlChar::isupper("a"));
var_dump(IntlChar::isupper("Φ"));
var_dump(IntlChar::isupper("φ"));
var_dump(IntlChar::isupper("1"));
?>

   
```

The above example will output:

```text

    
bool(true)
bool(false)
bool(true)
bool(false)
bool(false)

   
```

## See Also

`IntlChar::islower()` `IntlChar::istitle()` `IntlChar::tolower()` `IntlChar::toupper()` `IntlChar::PROPERTY_UPPERCASE` `ctype_upper()`
