---
id: "en-php-function-intlchar-isdefined"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::isdefined"
title: "Check whether the code point is defined"
signature: "public static bool|null IntlChar::isdefined(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.isdefined.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check whether the code point is defined

## Description

```php
public static bool|null IntlChar::isdefined(int|string $codepoint)
```

Determines whether the specified code point is "defined", which usually means that it is assigned a character.

`true` for general categories other than "Cn" (other, not assigned).

> Note that non-character code points (e.g., U+FDD0) are not "defined" (they are Cn), but surrogate code points are "defined" (Cs).

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns `true` if `$codepoint` is a defined character, `false` if not. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::isdefined("A"));
var_dump(IntlChar::isdefined(" "));
var_dump(IntlChar::isdefined("\u{FDD0}"));
?>

   
```

The above example will output:

```text

    
bool(true)
bool(true)
bool(false)

   
```

## See Also

`IntlChar::isdigit()` `IntlChar::isalpha()` `IntlChar::isalnum()` `IntlChar::isupper()` `IntlChar::islower()` `IntlChar::istitle()`
