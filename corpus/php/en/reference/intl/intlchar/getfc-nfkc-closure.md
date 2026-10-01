---
id: "en-php-function-intlchar-getfc-nfkc-closure"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::getFC_NFKC_Closure"
title: "Get the FC_NFKC_Closure property for a code point"
signature: "public static string|false|null IntlChar::getFC_NFKC_Closure(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.getfc-nfkc-closure.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the FC_NFKC_Closure property for a code point

## Description

```php
public static string|false|null IntlChar::getFC_NFKC_Closure(int|string $codepoint)
```

Gets the FC_NFKC_Closure property string for a character.

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns the FC_NFKC_Closure property string for the `$codepoint`, or an empty string if there is none. Returns `null` or `false` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::getFC_NFKC_Closure("\u{2121}"));
var_dump(IntlChar::getFC_NFKC_Closure("\u{1D2D}"));
?>

   
```

The above example will output:

```text

    
string(3) "tel"
string(2) "æ"

   
```
