---
id: "en-php-function-intlchar-isxdigit"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::isxdigit"
title: "Check if code point is a hexadecimal digit"
signature: "public static bool|null IntlChar::isxdigit(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.isxdigit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if code point is a hexadecimal digit

## Description

```php
public static bool|null IntlChar::isxdigit(int|string $codepoint)
```

Determines whether the specified code point is a hexadecimal digit.

`true` for characters with general category "Nd" (decimal digit numbers) as well as Latin letters a-f and A-F in both ASCII and Fullwidth ASCII. (That is, for letters with code points 0041..0046, 0061..0066, FF21..FF26, FF41..FF46.)

This is equivalent to `IntlChar::digit($codepoint, 16) >= 0`.

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns `true` if `$codepoint` is a hexadecimal character, `false` if not. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::isxdigit("A"));
var_dump(IntlChar::isxdigit("1"));
var_dump(IntlChar::isxdigit("\u{2603}"));
?>

   
```

The above example will output:

```text

    
bool(true)
bool(true)
bool(false)

   
```

## Notes

> In order to narrow the definition of hexadecimal digits to only ASCII characters use:
>
> ```php
>
>     
> <?php
> $isASCIIHexadecimal = IntlChar::ord($codepoint) <= 0x7F && IntlChar::isxdigit($codepoint);
> ?>
>
>    
> ```

## See Also

`IntlChar::isdigit()` `ctype_xdigit()`
