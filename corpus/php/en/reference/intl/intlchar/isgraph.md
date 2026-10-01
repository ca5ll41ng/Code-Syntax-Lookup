---
id: "en-php-function-intlchar-isgraph"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::isgraph"
title: "Check if code point is a graphic character"
signature: "public static bool|null IntlChar::isgraph(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.isgraph.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if code point is a graphic character

## Description

```php
public static bool|null IntlChar::isgraph(int|string $codepoint)
```

Determines whether the specified code point is a "graphic" character (printable, excluding spaces).

`true` for all characters except those with general categories "Cc" (control codes), "Cf" (format controls), "Cs" (surrogates), "Cn" (unassigned), and "Z" (separators).

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns `true` if `$codepoint` is a "graphic" character, `false` if not. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::isgraph("A"));
var_dump(IntlChar::isgraph("1"));
var_dump(IntlChar::isgraph("\u{2603}"));
var_dump(IntlChar::isgraph("\n"));
?>

   
```

The above example will output:

```text

    
bool(true)
bool(true)
bool(true)
bool(false)

   
```

## See Also

`ctype_graph()`
