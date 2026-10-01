---
id: "en-php-function-function-grapheme-strlen"
language: "php"
lang: "en"
category: "function"
name: "grapheme_strlen"
title: "Get string length in grapheme units"
signature: "int|false|null grapheme_strlen(string $string)"
module: "intl"
source_url: "https://www.php.net/manual/en/function.grapheme-strlen.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get string length in grapheme units

## Description

Procedural style

```php
int|false|null grapheme_strlen(string $string)
```

Get string length in grapheme units (not bytes or characters)

## Parameters

- **`$string`** — The string being measured for length. It must be a valid UTF-8 string.

## Return Values

The length of the string on success, `null` or `false` on failure.

## Examples

**`grapheme_strlen()` example**

```php


<?php

$char_a_ring_nfd = "a\xCC\x8A";  // 'LATIN SMALL LETTER A WITH RING ABOVE' (U+00E5) normalization form "D"
$char_o_diaeresis_nfd = "o\xCC\x88"; // 'LATIN SMALL LETTER O WITH DIAERESIS' (U+00F6) normalization form "D"

print grapheme_strlen( 'abc' . $char_a_ring_nfd . $char_o_diaeresis_nfd . $char_a_ring_nfd);

?>

   
```

The above example will output:

```text


6

  
```

## See Also

[Unicode Text Segmentation: Grapheme Cluster Boundaries]() `iconv_strlen()` `mb_strlen()` `strlen()`
