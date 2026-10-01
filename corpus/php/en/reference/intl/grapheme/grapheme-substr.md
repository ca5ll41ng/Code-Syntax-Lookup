---
id: "en-php-function-function-grapheme-substr"
language: "php"
lang: "en"
category: "function"
name: "grapheme_substr"
title: "Return part of a string"
signature: "string|false grapheme_substr(string $string, int $offset, int|null $length = null, string $locale = \"\")"
module: "intl"
source_url: "https://www.php.net/manual/en/function.grapheme-substr.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return part of a string

## Description

Procedural style

```php
string|false grapheme_substr(string $string, int $offset, int|null $length = null, string $locale = "")
```

Return part of a string

## Parameters

- **`$string`** — The input string. Must be valid UTF-8.
- **`$offset`** — Start position in default grapheme units. If `$offset` is non-negative, the returned string will start at the `$offset`'th position in `$string`, counting from zero. If `$offset` is negative, the returned string will start at the `$offset`'th grapheme unit from the end of string.
- **`$length`** — Length in grapheme units. If `$length` is given and is positive, the string returned will contain at most `$length` grapheme units beginning from `$offset` (depending on the length of string). If `$length` is given and is negative, then that many grapheme units will be omitted from the end of string (after the start position has been calculated when `$offset` is negative). If `$offset` denotes a position beyond this truncation, an empty string will be returned.
- **`$locale`** — Locale to use.

## Return Values

Returns the extracted part of `$string`, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | The optional parameter `$locale` has been added. |
| 8.0.0 | The function now consistently clamps out-of-bounds offsets to the string boundary. Previously, `false` was returned instead of the empty string in some cases. |

## Examples

**`grapheme_substr()` example**

```php


<?php

$char_a_ring_nfd = "a\xCC\x8A";  // 'LATIN SMALL LETTER A WITH RING ABOVE' (U+00E5) normalization form "D"
$char_o_diaeresis_nfd = "o\xCC\x88"; // 'LATIN SMALL LETTER O WITH DIAERESIS' (U+00F6) normalization form "D"

print urlencode(grapheme_substr( "ao" . $char_a_ring_nfd . "bc" . $char_o_diaeresis_nfd . "O", 2, -1 ));
?>

   
```

The above example will output:

```text


a%CC%8Abco%CC%88

  
```

## See Also

`grapheme_extract()` [Unicode Text Segmentation: Grapheme Cluster Boundaries]()
