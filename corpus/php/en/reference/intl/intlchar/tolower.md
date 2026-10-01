---
id: "en-php-function-intlchar-tolower"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::tolower"
title: "Make Unicode character lowercase"
signature: "public static int|string|null IntlChar::tolower(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.tolower.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Make Unicode character lowercase

## Description

```php
public static int|string|null IntlChar::tolower(int|string $codepoint)
```

The given character is mapped to its lowercase equivalent. If the character has no lowercase equivalent, the original character itself is returned.

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns the Simple_Lowercase_Mapping of the code point, if any; otherwise the code point itself. Returns `null` on failure.

The return type is `int` unless the code point was passed as a UTF-8 `string`, in which case a `string` is returned. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::tolower("A"));
var_dump(IntlChar::tolower("a"));
var_dump(IntlChar::tolower("Φ"));
var_dump(IntlChar::tolower("φ"));
var_dump(IntlChar::tolower("1"));
var_dump(IntlChar::tolower(ord("A")));
var_dump(IntlChar::tolower(ord("a")));
?>

   
```

The above example will output:

```text

    
string(1) "a"
string(1) "a"
string(2) "φ"
string(2) "φ"
string(1) "1"
int(97)
int(97)

   
```

## See Also

`IntlChar::totitle()` `IntlChar::toupper()` `mb_strtolower()`
