---
id: "en-php-function-function-mb-encode-numericentity"
language: "php"
lang: "en"
category: "function"
name: "mb_encode_numericentity"
title: "Encode character to HTML numeric string reference"
signature: "string mb_encode_numericentity(string $string, array $map, string|null $encoding = null, bool $hex = false)"
module: "mbstring"
source_url: "https://www.php.net/manual/en/function.mb-encode-numericentity.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Encode character to HTML numeric string reference

## Description

```php
string mb_encode_numericentity(string $string, array $map, string|null $encoding = null, bool $hex = false)
```

Converts specified character codes in `string` `$string` from character code to HTML numeric character reference.

## Parameters

- **`$string`** — The `string` being encoded.
- **`$map`** — `$map` is array specifies code area to convert.
- **`$encoding`** — The `$encoding` parameter is the character encoding. If it is omitted or `null`, the internal character encoding value will be used.
- **`$hex`** — Whether the returned entity reference should be in hexadecimal notation (otherwise it is in decimal notation).

## Return Values

The converted `string`.

## Errors/Exceptions

Throws a ValueError if `$map` contains any value that is not an `integer`, `float`, `boolean`, `null`, or a numeric string.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | The `mb_encode_numericentity()` function now throws a ValueError if `$map` contains any value that cannot be implicitly converted to int. |
| 8.0.0 | `$encoding` is nullable now. |

## Examples

**`$map` example**

```php


<?php

$convmap = array(
    int start_code1, int end_code1, int offset1, int mask1,
    int start_code2, int end_code2, int offset2, int mask2,
    // ........
    int start_codeN, int end_codeN, int offsetN, int maskN
);
// Specify Unicode value for start_codeN and end_codeN
// Add offsetN to value and take bit-wise 'AND' with maskN,
// then converts value to numeric string reference.
?>

    
```

**`mb_encode_numericentity()` example**

```php


<?php

$str = "aAæÆあア𩸽";

/* Convert all UTF8 characters up to 4 bytes to HTML numeric character reference */
$convmap = [0, 0x1FFFFF, 0, 0x10FFFF];
var_dump(mb_encode_numericentity($str, $convmap, "utf8"));

/* Converts only 2-byte and 4-byte UTF8 characters to HTML numeric character reference */
$convmap = [
    0x80, 0x7FF, 0, 0x10FFFF,
    0x10000, 0x1FFFFF, 0, 0x10FFFF,
];

var_dump(mb_encode_numericentity($str, $convmap, "utf8"));
?>

    
```

The above example will output:

```text


string(46) "&#97;&#65;&#230;&#198;&#12354;&#12450;&#40509;"
string(28) "aA&#230;&#198;あア&#40509;"

   
```

## See Also

`mb_decode_numericentity()`
