---
id: "en-php-function-function-grapheme-strpos"
language: "php"
lang: "en"
category: "function"
name: "grapheme_strpos"
title: "Find position (in grapheme units) of first occurrence of a string"
signature: "int|false grapheme_strpos(string $haystack, string $needle, int $offset = 0, string $locale = \"\")"
module: "intl"
source_url: "https://www.php.net/manual/en/function.grapheme-strpos.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Find position (in grapheme units) of first occurrence of a string

## Description

Procedural style

```php
int|false grapheme_strpos(string $haystack, string $needle, int $offset = 0, string $locale = "")
```

Find position (in grapheme units) of first occurrence of a string

## Parameters

- **`$haystack`** — The string to look in. Must be valid UTF-8.
- **`$needle`** — The string to look for. Must be valid UTF-8.
- **`$offset`** — The optional `$offset` parameter allows you to specify where in `$haystack` to start searching as an offset in grapheme units (not bytes or characters). If the offset is negative, it is treated relative to the end of the string. The position returned is still relative to the beginning of `$haystack` regardless of the value of `$offset`.
- **`$locale`** — Locale to use.

## Return Values

Returns the position as an integer. If `$needle` is not found, `grapheme_strpos()` will return `false`.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | The optional parameter `$locale` has been added. |
| 7.1.0 | Support for negative `$offset`s has been added. |

## Examples

**`grapheme_strpos()` example**

```php


<?php

$char_a_ring_nfd = "a\xCC\x8A";  // 'LATIN SMALL LETTER A WITH RING ABOVE' (U+00E5) normalization form "D"
$char_o_diaeresis_nfd = "o\xCC\x88"; // 'LATIN SMALL LETTER O WITH DIAERESIS' (U+00F6) normalization form "D"

print grapheme_strpos( $char_a_ring_nfd . $char_a_ring_nfd . $char_o_diaeresis_nfd, $char_o_diaeresis_nfd);

?>

   
```

The above example will output:

```text


2

  
```

## See Also

`grapheme_stripos()` `grapheme_stristr()` `grapheme_strripos()` `grapheme_strrpos()` `grapheme_strstr()` [Unicode Text Segmentation: Grapheme Cluster Boundaries]()
