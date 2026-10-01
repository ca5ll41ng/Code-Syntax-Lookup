---
id: "en-php-function-intlchar-getcombiningclass"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::getCombiningClass"
title: "Get the combining class of a code point"
signature: "public static int|null IntlChar::getCombiningClass(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.getcombiningclass.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the combining class of a code point

## Description

```php
public static int|null IntlChar::getCombiningClass(int|string $codepoint)
```

Returns the combining class of the code point.

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns the combining class of the character. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::getCombiningClass("A"));
var_dump(IntlChar::getCombiningClass("\u{0334}"));
var_dump(IntlChar::getCombiningClass("\u{0358}"));
?>

   
```

The above example will output:

```text

    
int(0)
int(1)
int(232)

   
```
