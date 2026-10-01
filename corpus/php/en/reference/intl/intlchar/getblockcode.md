---
id: "en-php-function-intlchar-getblockcode"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::getBlockCode"
title: "Get the Unicode allocation block containing a code point"
signature: "public static int|null IntlChar::getBlockCode(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.getblockcode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the Unicode allocation block containing a code point

## Description

```php
public static int|null IntlChar::getBlockCode(int|string $codepoint)
```

Returns the Unicode allocation block that contains the character.

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns the block value for `$codepoint`. See the `IntlChar::BLOCK_CODE_{*}` constants for possible return values. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::getBlockCode("A") === IntlChar::BLOCK_CODE_BASIC_LATIN);
var_dump(IntlChar::getBlockCode("Φ") === IntlChar::BLOCK_CODE_GREEK);
var_dump(IntlChar::getBlockCode("\u{2603}") === IntlChar::BLOCK_CODE_MISCELLANEOUS_SYMBOLS);
?>

   
```

The above example will output:

```text

    
bool(true)
bool(true)
bool(true)

   
```
