---
id: "en-php-function-intlchar-isidstart"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::isIDStart"
title: "Check if code point is permissible as the first character in an identifier"
signature: "public static bool|null IntlChar::isIDStart(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.isidstart.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if code point is permissible as the first character in an identifier

## Description

```php
public static bool|null IntlChar::isIDStart(int|string $codepoint)
```

Determines if the specified character is permissible as the first character in an identifier according to Unicode (The Unicode Standard, Version 3.0, chapter 5.16 Identifiers).

`true` for characters with general categories "L" (letters) and "Nl" (letter numbers).

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns `true` if `$codepoint` may start an identifier, `false` if not. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::isIDStart("A"));
var_dump(IntlChar::isIDStart("$"));
var_dump(IntlChar::isIDStart("\n"));
var_dump(IntlChar::isIDStart("\u{2603}"));
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

`IntlChar::isalpha()` `IntlChar::isIDPart()` `IntlChar::PROPERTY_ID_START`
