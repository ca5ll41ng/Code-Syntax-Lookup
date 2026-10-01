---
id: "en-php-function-intlchar-isprint"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::isprint"
title: "Check if code point is a printable character"
signature: "public static bool|null IntlChar::isprint(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.isprint.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if code point is a printable character

## Description

```php
public static bool|null IntlChar::isprint(int|string $codepoint)
```

Determines whether the specified code point is a printable character.

`true` for general categories other than "C" (controls).

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns `true` if `$codepoint` is a printable character, `false` if not. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::isprint("A"));
var_dump(IntlChar::isprint(" "));
var_dump(IntlChar::isprint("\n"));
var_dump(IntlChar::isprint("\u{200e}"));
?>

   
```

The above example will output:

```text

    
bool(true)
bool(true)
bool(false)
bool(false)

   
```

## See Also

`IntlChar::iscntrl()` `IntlChar::PROPERTY_DEFAULT_IGNORABLE_CODE_POINT` `ctype_print()`
