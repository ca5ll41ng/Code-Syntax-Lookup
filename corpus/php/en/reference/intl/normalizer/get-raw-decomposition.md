---
id: "en-php-function-normalizer-getrawdecomposition"
language: "php"
lang: "en"
category: "function"
name: "Normalizer::getRawDecomposition"
aliases: ["normalizer_get_raw_decomposition"]
title: "Gets the Decomposition_Mapping property for the given UTF-8 encoded code point"
signature: "public static string|null Normalizer::getRawDecomposition(string $string, int $form = Normalizer::FORM_C)"
module: "intl"
source_url: "https://www.php.net/manual/en/normalizer.getrawdecomposition.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the Decomposition_Mapping property for the given UTF-8 encoded code point

## Description

Object-oriented style

```php
public static string|null Normalizer::getRawDecomposition(string $string, int $form = Normalizer::FORM_C)
```

Procedural style

```php
string|null normalizer_get_raw_decomposition(string $string, int $form = Normalizer::FORM_C)
```

Gets the Decomposition_Mapping property, as specified in the Unicode Character Database (UCD), for the given UTF-8 encoded code point.

## Parameters

- **`$string`** — The input string, which should be a single, UTF-8 encoded, code point.

## Return Values

Returns a `string` containing the Decomposition_Mapping property, if present in the UCD.

Returns `null` if there is no Decomposition_Mapping property for the character.

## Examples

**`Normalizer::getRawDecomposition()` example**

```php


<?php

$result = "";
$strings = [
    "a",
    "\u{FFDA}",
    "\u{FDFA}",
    "",
    "aa",
    "\xF5",
];

foreach ($strings as $string) {
    $decomposition = Normalizer::getRawDecomposition($string);
    // $decomposition = normalizer_get_raw_decomposition($string); Procedural way

    $error_code = intl_get_error_code();
    $error_message = intl_get_error_message();

    $string_hex = bin2hex($string);
    $result .= "---------------------\n";

    if ($decomposition === null) {
        $result .= "'$string_hex' has no decomposition mapping\n" ;
    } else {
        $result .= "'$string_hex' has the decomposition mapping '" . bin2hex($decomposition) . "'\n" ;
    }

    $result .= "error info: '$error_message' ($error_code)\n";
}

echo $result;
?>

   
```

The above example will output:

```text


---------------------
'61' has no decomposition mapping
error info: 'U_ZERO_ERROR' (0)
---------------------
'efbf9a' has the decomposition mapping 'e385a1'
error info: 'U_ZERO_ERROR' (0)
---------------------
'efb7ba' has the decomposition mapping 'd8b5d984d98920d8a7d984d984d98720d8b9d984d98ad98720d988d8b3d984d985'
error info: 'U_ZERO_ERROR' (0)
---------------------
'' has no decomposition mapping
error info: 'Input string must be exactly one UTF-8 encoded code point long.: U_ILLEGAL_ARGUMENT_ERROR' (1)
---------------------
'6161' has no decomposition mapping
error info: 'Input string must be exactly one UTF-8 encoded code point long.: U_ILLEGAL_ARGUMENT_ERROR' (1)
---------------------
'f5' has no decomposition mapping
error info: 'Code point out of range: U_ILLEGAL_ARGUMENT_ERROR' (1)

   
```

## See Also

 `Normalizer::normalize()` `Normalizer::isNormalized()`
