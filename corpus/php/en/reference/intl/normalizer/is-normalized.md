---
id: "en-php-function-normalizer-isnormalized"
language: "php"
lang: "en"
category: "function"
name: "Normalizer::isNormalized"
aliases: ["normalizer_is_normalized"]
title: "Checks if the provided string is already in the specified normalization form"
signature: "public static bool Normalizer::isNormalized(string $string, int $form = Normalizer::FORM_C)"
module: "intl"
source_url: "https://www.php.net/manual/en/normalizer.isnormalized.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if the provided string is already in the specified normalization form

## Description

Object-oriented style

```php
public static bool Normalizer::isNormalized(string $string, int $form = Normalizer::FORM_C)
```

Procedural style

```php
bool normalizer_is_normalized(string $string, int $form = Normalizer::FORM_C)
```

Checks if the provided string is already in the specified normalization form.

## Parameters

- **`$string`** — The input string to normalize
- **`$form`** — One of the normalization forms.

## Return Values

`true` if normalized, `false` otherwise or if there an error

## Examples

**`normalizer_is_normalized()` example**

```php

    
<?php
$char_A_ring = "\xC3\x85"; // 'LATIN CAPITAL LETTER A WITH RING ABOVE' (U+00C5)
$char_combining_ring_above = "\xCC\x8A";  // 'COMBINING RING ABOVE' (U+030A)
 
$char_orig = 'A' . $char_combining_ring_above;
$char_norm = normalizer_normalize( 'A' . $char_combining_ring_above, Normalizer::FORM_C );
 
echo ( normalizer_is_normalized($char_orig, Normalizer::FORM_C) ) ? "normalized" : "not normalized";
echo '; ';
echo ( normalizer_is_normalized($char_norm, Normalizer::FORM_C) ) ? "normalized" : "not normalized";
?>

   
```

**OO example**

```php

    
<?php
$char_A_ring = "\xC3\x85"; // 'LATIN CAPITAL LETTER A WITH RING ABOVE' (U+00C5)
$char_combining_ring_above = "\xCC\x8A";  // 'COMBINING RING ABOVE' (U+030A)
 
$char_orig = 'A' . $char_combining_ring_above;
$char_norm = Normalizer::normalize( 'A' . $char_combining_ring_above, Normalizer::FORM_C );
 
echo ( Normalizer::isNormalized($char_orig, Normalizer::FORM_C) ) ? "normalized" : "not normalized";
echo '; ';
echo ( Normalizer::isNormalized($char_norm, Normalizer::FORM_C) ) ? "normalized" : "not normalized";
?>

   
```

The above example will output:

```text

   
not normalized; normalized

  
```

## See Also

`normalizer_normalize()`
