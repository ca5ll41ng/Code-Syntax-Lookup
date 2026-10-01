---
id: "en-php-function-intlchar-islower"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::islower"
title: "Check if code point is a lowercase letter"
signature: "public static bool|null IntlChar::islower(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.islower.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if code point is a lowercase letter

## Description

```php
public static bool|null IntlChar::islower(int|string $codepoint)
```

Determines whether the specified code point has the general category "Ll" (lowercase letter).

> This misses some characters that are also lowercase but have a different general category value. In order to include those, use `IntlChar::isULowercase()`.

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns `true` if `$codepoint` is an Ll lowercase letter, `false` if not. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::islower("A"));
var_dump(IntlChar::islower("a"));
var_dump(IntlChar::islower("Φ"));
var_dump(IntlChar::islower("φ"));
var_dump(IntlChar::islower("1"));
?>

   
```

The above example will output:

```text

    
bool(false)
bool(true)
bool(false)
bool(true)
bool(false)

   
```

## See Also

`IntlChar::isupper()` `IntlChar::istitle()` `IntlChar::tolower()` `IntlChar::toupper()` `IntlChar::PROPERTY_LOWERCASE` `ctype_lower()`
