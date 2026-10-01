---
id: "en-php-function-function-grapheme-stristr"
language: "php"
lang: "en"
category: "function"
name: "grapheme_stristr"
title: "Returns part of haystack string from the first occurrence of case-insensitive needle to the end of haystack"
signature: "string|false grapheme_stristr(string $haystack, string $needle, bool $beforeNeedle = false, string $locale = \"\")"
module: "intl"
source_url: "https://www.php.net/manual/en/function.grapheme-stristr.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns part of haystack string from the first occurrence of case-insensitive needle to the end of haystack

## Description

Procedural style

```php
string|false grapheme_stristr(string $haystack, string $needle, bool $beforeNeedle = false, string $locale = "")
```

Returns part of `$haystack` string starting from and including the first occurrence of case-insensitive needle to the end of `$haystack`.

## Parameters

- **`$haystack`** — The input string. Must be valid UTF-8.
- **`$needle`** — The string to look for. Must be valid UTF-8.
- **`$beforeNeedle`** — If `true`, `grapheme_stristr()` returns the part of the `$haystack` before the first occurrence of the needle (excluding `$needle`).
- **`$locale`** — Locale to use.

## Return Values

Returns the portion of `$haystack`, or `false` if `$needle` is not found.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | The optional parameter `$locale` has been added. |

## Examples

**`grapheme_stristr()` example**

```php


<?php

$char_a_ring_nfd = "a\xCC\x8A";  // 'LATIN SMALL LETTER A WITH RING ABOVE' (U+00E5) normalization form "D"
$char_o_diaeresis_nfd = "o\xCC\x88"; // 'LATIN SMALL LETTER O WITH DIAERESIS' (U+00F6) normalization form "D"
$char_O_diaeresis_nfd = "O\xCC\x88"; // 'LATIN CAPITAL LETTER O WITH DIAERESIS' (U+00D6) normalization form "D"

print urlencode(grapheme_stristr( $char_a_ring_nfd . $char_o_diaeresis_nfd . $char_a_ring_nfd, $char_O_diaeresis_nfd));

?>

   
```

The above example will output:

```text


o%CC%88a%CC%8A

  
```

## See Also

`grapheme_stripos()` `grapheme_strpos()` `grapheme_strripos()` `grapheme_strrpos()` `grapheme_strstr()` [Unicode Text Segmentation: Grapheme Cluster Boundaries]()
