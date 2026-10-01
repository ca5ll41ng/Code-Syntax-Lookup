---
id: "en-php-function-function-grapheme-extract"
language: "php"
lang: "en"
category: "function"
name: "grapheme_extract"
title: "Function to extract a sequence of default grapheme clusters from a text buffer, which must be encoded in UTF-8"
signature: "string|false grapheme_extract(string $haystack, int $size, int $type = GRAPHEME_EXTR_COUNT, int $offset = 0, int $next = null)"
module: "intl"
source_url: "https://www.php.net/manual/en/function.grapheme-extract.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Function to extract a sequence of default grapheme clusters from a text buffer, which must be encoded in UTF-8

## Description

Procedural style

```php
string|false grapheme_extract(string $haystack, int $size, int $type = GRAPHEME_EXTR_COUNT, int $offset = 0, int $next = null)
```

Function to extract a sequence of default grapheme clusters from a text buffer, which must be encoded in UTF-8.

## Parameters

- **`$haystack`** — String to search.
- **`$size`** — Maximum number items - based on the `$type` - to return.
- **`$type`** — Defines the type of units referred to by the `$size` parameter: — GRAPHEME_EXTR_COUNT (default) -`$size` is the number of default grapheme clusters to extract. GRAPHEME_EXTR_MAXBYTES -`$size` is the maximum number of bytes returned. GRAPHEME_EXTR_MAXCHARS - `$size` is the maximum number of UTF-8 characters returned.
- **`$offset`** — Starting position in `$haystack` in bytes - if given, it must be zero or a positive value that is less than or equal to the length of `$haystack` in bytes, or a negative value that counts from the end of `$haystack`. If `$offset` does not point to the first byte of a UTF-8 character, the start position is moved to the next character boundary.
- **`$next`** — Reference to a value that will be set to the next starting position. When the call returns, this may point to the first byte position past the end of the string.

## Return Values

A string starting at offset `$offset` and ending on a default grapheme cluster boundary that conforms to the `$size` and `$type` specified, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 7.1.0 | Support for negative `$offset`s has been added. |

## Examples

**`grapheme_extract()` example**

```php


<?php

$char_a_ring_nfd = "a\xCC\x8A";  // 'LATIN SMALL LETTER A WITH RING ABOVE' (U+00E5) normalization form "D"
$char_o_diaeresis_nfd = "o\xCC\x88"; // 'LATIN SMALL LETTER O WITH DIAERESIS' (U+00F6) normalization form "D"

print urlencode(grapheme_extract( $char_a_ring_nfd . $char_o_diaeresis_nfd, 1, GRAPHEME_EXTR_COUNT, 2));

?>

   
```

The above example will output:

```text


o%CC%88

  
```

## See Also

`grapheme_substr()` [Unicode Text Segmentation: Grapheme Cluster Boundaries]()
