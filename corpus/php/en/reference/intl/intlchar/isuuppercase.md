---
id: "en-php-function-intlchar-isuuppercase"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::isUUppercase"
title: "Check if code point has the Uppercase Unicode property"
signature: "public static bool|null IntlChar::isUUppercase(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.isuuppercase.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if code point has the Uppercase Unicode property

## Description

```php
public static bool|null IntlChar::isUUppercase(int|string $codepoint)
```

Check if a code point has the Uppercase Unicode property.

This is the same as `IntlChar::hasBinaryProperty($codepoint, IntlChar::PROPERTY_UPPERCASE)`

> This is different than `IntlChar::isupper()` and will return `true` for more characters.

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns `true` if `$codepoint` has the Uppercase Unicode property, `false` if not. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::isUUppercase("A"));
var_dump(IntlChar::isUUppercase("a"));
var_dump(IntlChar::isUUppercase("Φ"));
var_dump(IntlChar::isUUppercase("φ"));
var_dump(IntlChar::isUUppercase("1"));
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

`IntlChar::isupper()` `IntlChar::hasBinaryProperty()` `IntlChar::PROPERTY_UPPERCASE`
