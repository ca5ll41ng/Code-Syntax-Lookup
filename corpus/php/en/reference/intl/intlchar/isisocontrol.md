---
id: "en-php-function-intlchar-isisocontrol"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::isISOControl"
title: "Check if code point is an ISO control code"
signature: "public static bool|null IntlChar::isISOControl(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.isisocontrol.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if code point is an ISO control code

## Description

```php
public static bool|null IntlChar::isISOControl(int|string $codepoint)
```

Determines whether the specified code point is an ISO control code.

`true` for U+0000..U+001f and U+007f..U+009f (general category "Cc").

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns `true` if `$codepoint` is an ISO control code, `false` if not. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::isISOControl(" "));
var_dump(IntlChar::isISOControl("\n"));
var_dump(IntlChar::isISOControl("\u{200e}"));
?>

   
```

The above example will output:

```text

    
bool(false)
bool(true)
bool(false)

   
```

## See Also

`IntlChar::iscntrl()`
