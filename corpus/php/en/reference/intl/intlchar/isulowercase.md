---
id: "en-php-function-intlchar-isulowercase"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::isULowercase"
title: "Check if code point has the Lowercase Unicode property"
signature: "public static bool|null IntlChar::isULowercase(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.isulowercase.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if code point has the Lowercase Unicode property

## Description

```php
public static bool|null IntlChar::isULowercase(int|string $codepoint)
```

Check if a code point has the Lowercase Unicode property.

This is the same as `IntlChar::hasBinaryProperty($codepoint, IntlChar::PROPERTY_LOWERCASE)`

> This is different than `IntlChar::islower()` and will return `true` for more characters.

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns `true` if `$codepoint` has the Lowercase Unicode property, `false` if not. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::isULowercase("A"));
var_dump(IntlChar::isULowercase("a"));
var_dump(IntlChar::isULowercase("Φ"));
var_dump(IntlChar::isULowercase("φ"));
var_dump(IntlChar::isULowercase("1"));
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

`IntlChar::islower()` `IntlChar::hasBinaryProperty()` `IntlChar::PROPERTY_LOWERCASE`
