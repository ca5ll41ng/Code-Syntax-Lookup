---
id: "en-php-function-normalizer-normalize"
language: "php"
lang: "en"
category: "function"
name: "Normalizer::normalize"
aliases: ["normalizer_normalize"]
title: "Normalizes the input provided and returns the normalized string"
signature: "public static string|false Normalizer::normalize(string $string, int $form = Normalizer::FORM_C)"
module: "intl"
source_url: "https://www.php.net/manual/en/normalizer.normalize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Normalizes the input provided and returns the normalized string

## Description

Object-oriented style

```php
public static string|false Normalizer::normalize(string $string, int $form = Normalizer::FORM_C)
```

Procedural style

```php
string|false normalizer_normalize(string $string, int $form = Normalizer::FORM_C)
```

Normalizes the input provided and returns the normalized string

## Parameters

- **`$string`** — The input string to normalize
- **`$form`** — One of the normalization forms.

## Return Values

The normalized string or `false` if an error occurred.

## Examples

**`normalizer_normalize()` example**

```php

    
<?php
$char_A_ring = "\xC3\x85"; // 'LATIN CAPITAL LETTER A WITH RING ABOVE' (U+00C5)
$char_combining_ring_above = "\xCC\x8A";  // 'COMBINING RING ABOVE' (U+030A)
 
$char_1 = normalizer_normalize( $char_A_ring, Normalizer::FORM_C );
$char_2 = normalizer_normalize( 'A' . $char_combining_ring_above, Normalizer::FORM_C );
 
echo urlencode($char_1);
echo ' ';
echo urlencode($char_2);
?>

   
```

**OO example**

```php

    
<?php
$char_A_ring = "\xC3\x85"; // 'LATIN CAPITAL LETTER A WITH RING ABOVE' (U+00C5)
$char_combining_ring_above = "\xCC\x8A";  // 'COMBINING RING ABOVE' (U+030A)
 
$char_1 = Normalizer::normalize( $char_A_ring, Normalizer::FORM_C );
$char_2 = Normalizer::normalize( 'A' . $char_combining_ring_above, Normalizer::FORM_C );
 
echo urlencode($char_1);
echo ' ';
echo urlencode($char_2);
?>

   
```

The above example will output:

```text

   
%C3%85 %C3%85

  
```

## See Also

`normalizer_is_normalized()`
