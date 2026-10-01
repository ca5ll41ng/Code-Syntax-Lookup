---
id: "en-php-function-intlchar-charage"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::charAge"
title: "Get the \"age\" of the code point"
signature: "public static array|null IntlChar::charAge(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.charage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the "age" of the code point

## Description

```php
public static array|null IntlChar::charAge(int|string $codepoint)
```

Gets the "age" of the code point.

The "age" is the Unicode version when the code point was first designated (as a non-character or for Private Use) or assigned a character. This can be useful to avoid emitting code points to receiving processes that do not accept newer characters.

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

The Unicode version number, as an `array`. For example, version *1.3.31.2* would be represented as `[1, 3, 31, 2]`. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::charage("\u{2603}"));
var_dump(IntlChar::charage("\u{1F576}"));
?>

   
```

The above example will output:

```text

    
array(4) {
  [0]=>
  int(1)
  [1]=>
  int(1)
  [2]=>
  int(0)
  [3]=>
  int(0)
}
array(4) {
  [0]=>
  int(7)
  [1]=>
  int(0)
  [2]=>
  int(0)
  [3]=>
  int(0)
}

   
```

## See Also

`IntlChar::getUnicodeVersion()` `IntlChar::getIntPropertyMinValue()` `IntlChar::getIntPropertyValue()`
