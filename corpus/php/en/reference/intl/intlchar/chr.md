---
id: "en-php-function-intlchar-chr"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::chr"
title: "Return Unicode character by code point value"
signature: "public static string|null IntlChar::chr(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.chr.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return Unicode character by code point value

## Description

```php
public static string|null IntlChar::chr(int|string $codepoint)
```

Returns a string containing the character specified by the Unicode code point value.

This method complements `IntlChar::ord()`.

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

A string containing the single character specified by the Unicode code point value, or `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
$values = ["A", 63, 123, 9731];
foreach ($values as $value) {
    var_dump(IntlChar::chr($value));
}
?>

   
```

The above example will output:

```text

    
string(1) "A"
string(1) "?"
string(1) "{"
string(3) "☃"

   
```

## See Also

`IntlChar::ord()` `mb_chr()` `chr()`
