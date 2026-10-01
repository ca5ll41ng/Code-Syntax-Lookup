---
id: "en-php-function-intlchar-istitle"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::istitle"
title: "Check if code point is a titlecase letter"
signature: "public static bool|null IntlChar::istitle(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.istitle.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if code point is a titlecase letter

## Description

```php
public static bool|null IntlChar::istitle(int|string $codepoint)
```

Determines whether the specified code point is a titlecase letter.

`true` for general category "Lt" (titlecase letter).

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns `true` if `$codepoint` is a titlecase letter, `false` if not. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
// Latin Capital Letter Dz with Caron U+01C4
var_dump(IntlChar::istitle("Ǆ"));
// Latin Capital Letter D with Small Letter Z with Caron U+01C5
var_dump(IntlChar::istitle("ǅ"));
// Latin Small Letter Dz with Caron U+01C6
var_dump(IntlChar::istitle("ǆ"));

// Greek Capital Letter Alpha with Prosgegrammeni U+1FBC
var_dump(IntlChar::istitle("ᾼ"));
// Greek Small Letter Alpha with Ypogegrammeni U+1FB3
var_dump(IntlChar::istitle("ᾳ"));
// Greek Capital Letter Alpha U+0391
var_dump(IntlChar::istitle("Α"));
?>

   
```

The above example will output:

```text

    
bool(false)
bool(true)
bool(false)
bool(true)
bool(false)
bool(false)

   
```

## See Also

`IntlChar::isupper()` `IntlChar::islower()` `IntlChar::totitle()`
