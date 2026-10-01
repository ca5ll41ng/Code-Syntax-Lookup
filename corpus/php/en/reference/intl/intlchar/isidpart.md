---
id: "en-php-function-intlchar-isidpart"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::isIDPart"
title: "Check if code point is permissible in an identifier"
signature: "public static bool|null IntlChar::isIDPart(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.isidpart.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if code point is permissible in an identifier

## Description

```php
public static bool|null IntlChar::isIDPart(int|string $codepoint)
```

Determines if the specified character is permissible in an identifier.

`true` for characters with general categories "L" (letters), "Nl" (letter numbers), "Nd" (decimal digits), "Mc" and "Mn" (combining marks), "Pc" (connecting punctuation), and u_isIDIgnorable(c).

> This is almost the same as Unicode's ID_Continue (`IntlChar::PROPERTY_ID_CONTINUE`) except that Unicode recommends to ignore Cf which is less than `IntlChar::isIDIgnorable()`.

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns `true` if `$codepoint` is the code point may occur in an identifier, `false` if not. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::isIDPart("A"));
var_dump(IntlChar::isIDPart("$"));
var_dump(IntlChar::isIDPart("\n"));
var_dump(IntlChar::isIDPart("\u{2603}"));
?>

   
```

The above example will output:

```text

    
bool(true)
bool(false)
bool(false)
bool(false)

   
```

## See Also

`IntlChar::isIDIgnorable()` `IntlChar::isIDStart()` `IntlChar::PROPERTY_ID_CONTINUE`
