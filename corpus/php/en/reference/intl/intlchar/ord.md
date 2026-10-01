---
id: "en-php-function-intlchar-ord"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::ord"
title: "Return Unicode code point value of character"
signature: "public static int|null IntlChar::ord(int|string $character)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.ord.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return Unicode code point value of character

## Description

```php
public static int|null IntlChar::ord(int|string $character)
```

Returns the Unicode code point value of the given character.

This function complements `IntlChar::chr()`.

## Parameters

- **`$character`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns the Unicode code point value as an integer.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::ord("A"));
var_dump(IntlChar::ord(" "));
var_dump(IntlChar::ord("\u{2603}"));
?>

   
```

The above example will output:

```text

    
int(65)
int(32)
int(9731)

   
```

## See Also

`IntlChar::chr()` `mb_ord()` `ord()`
