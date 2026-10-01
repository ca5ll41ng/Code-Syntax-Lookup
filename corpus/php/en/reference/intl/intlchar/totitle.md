---
id: "en-php-function-intlchar-totitle"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::totitle"
title: "Make Unicode character titlecase"
signature: "public static int|string|null IntlChar::totitle(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.totitle.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Make Unicode character titlecase

## Description

```php
public static int|string|null IntlChar::totitle(int|string $codepoint)
```

The given character is mapped to its titlecase equivalent. If the character has no titlecase equivalent, the original character itself is returned.

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns the Simple_Titlecase_Mapping of the code point, if any; otherwise the code point itself. Returns `null` on failure.

The return type is `int` unless the code point was passed as a UTF-8 `string`, in which case a `string` is returned. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::totitle("Ǆ"));
var_dump(IntlChar::totitle("ǆ"));
var_dump(IntlChar::totitle("Φ"));
var_dump(IntlChar::totitle("φ"));
var_dump(IntlChar::totitle("1"));
var_dump(IntlChar::totitle("ᾳ"));
var_dump(IntlChar::totitle(ord("A")));
?>

   
```

The above example will output:

```text

    
string(1) "ǅ"
string(1) "ǅ"
string(2) "Φ"
string(2) "φ"
string(1) "1"
string(1) "ᾼ"
int(65)

   
```

## See Also

`IntlChar::tolower()` `IntlChar::toupper()` `IntlChar::istitle()` `mb_convert_case()`
