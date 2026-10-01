---
id: "en-php-function-intlchar-toupper"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::toupper"
title: "Make Unicode character uppercase"
signature: "public static int|string|null IntlChar::toupper(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.toupper.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Make Unicode character uppercase

## Description

```php
public static int|string|null IntlChar::toupper(int|string $codepoint)
```

The given character is mapped to its uppercase equivalent. If the character has no uppercase equivalent, the character itself is returned.

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns the Simple_Uppercase_Mapping of the code point, if any; otherwise the code point itself.

The return type is `int` unless the code point was passed as a UTF-8 `string`, in which case a `string` is returned. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::toupper("A"));
var_dump(IntlChar::toupper("a"));
var_dump(IntlChar::toupper("Φ"));
var_dump(IntlChar::toupper("φ"));
var_dump(IntlChar::toupper("1"));
var_dump(IntlChar::toupper(ord("A")));
var_dump(IntlChar::toupper(ord("a")));
?>

   
```

The above example will output:

```text

    
string(1) "A"
string(1) "A"
string(2) "Φ"
string(2) "Φ"
string(1) "1"
int(65)
int(65)

   
```

## See Also

`IntlChar::tolower()` `IntlChar::totitle()` `mb_strtoupper()`
