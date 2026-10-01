---
id: "en-php-function-intlchar-isidignorable"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::isIDIgnorable"
title: "Check if code point is an ignorable character"
signature: "public static bool|null IntlChar::isIDIgnorable(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.isidignorable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if code point is an ignorable character

## Description

```php
public static bool|null IntlChar::isIDIgnorable(int|string $codepoint)
```

Determines if the specified character should be regarded as an ignorable character in an identifier.

`true` for characters with general category "Cf" (format controls) as well as non-whitespace ISO controls (U+0000..U+0008, U+000E..U+001B, U+007F..U+009F).

> Note that Unicode just recommends to ignore Cf (format controls).

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns `true` if `$codepoint` is ignorable in identifiers, `false` if not. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::isIDIgnorable("A"));
var_dump(IntlChar::isIDIgnorable(" "));
var_dump(IntlChar::isIDIgnorable("\u{007F}"));
?>

   
```

The above example will output:

```text

    
bool(false)
bool(false)
bool(true)

   
```

## See Also

`IntlChar::isIDStart()` `IntlChar::isIDPart()` `IntlChar::PROPERTY_DEFAULT_IGNORABLE_CODE_POINT`
