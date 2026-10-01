---
id: "en-php-function-intlchar-ispunct"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::ispunct"
title: "Check if code point is punctuation character"
signature: "public static bool|null IntlChar::ispunct(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.ispunct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if code point is punctuation character

## Description

```php
public static bool|null IntlChar::ispunct(int|string $codepoint)
```

Determines whether the specified code point is a punctuation character.

`true` for characters with general categories "P" (punctuation).

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns `true` if `$codepoint` is a punctuation character, `false` if not. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::ispunct("."));
var_dump(IntlChar::ispunct(","));
var_dump(IntlChar::ispunct("\n"));
var_dump(IntlChar::ispunct("$"));

   
```

The above example will output:

```text

    
bool(true)
bool(true)
bool(false)
bool(false)

   
```

## See Also

`ctype_punct()`
