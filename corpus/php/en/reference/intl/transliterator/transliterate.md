---
id: "en-php-function-transliterator-transliterate"
language: "php"
lang: "en"
category: "function"
name: "Transliterator::transliterate"
aliases: ["transliterator_transliterate"]
title: "Transliterate a string"
signature: "public string|false Transliterator::transliterate(string $string, int $start = 0, int $end = -1)"
module: "intl"
source_url: "https://www.php.net/manual/en/transliterator.transliterate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Transliterate a string

## Description

Object-oriented style

```php
public string|false Transliterator::transliterate(string $string, int $start = 0, int $end = -1)
```

Procedural style

```php
string|false transliterator_transliterate(Transliterator|string $transliterator, string $string, int $start = 0, int $end = -1)
```

Transforms a string or part thereof using an ICU transliterator.

## Parameters

- **`$transliterator`** — In the procedural version, either a `Transliterator` or a `string` from which a `Transliterator` can be built.
- **`$string`** — The string to be transformed.
- **`$start`** — The start index (in UTF-16 code units) from which the string will start to be transformed, inclusive. Indexing starts at 0. The text before will be left as is.
- **`$end`** — The end index (in UTF-16 code units) until which the string will be transformed, exclusive. Indexing starts at 0. The text after will be left as is.

## Return Values

The transformed string on success, or `false` on failure.

## Examples

**Converting escaped UTF-16 code units**

```php


<?php
$s = "\u304A\u65E9\u3046\u3054\u3056\u3044\u307E\u3059";
echo transliterator_transliterate("Hex-Any/Java", $s), "\n";

//now the reverse operation with a supplementary character
$supplChar = html_entity_decode('&#x1D11E;');
echo mb_strlen($supplChar, "UTF-8"), "\n";
$encSupplChar = transliterator_transliterate("Any-Hex/Java", $supplChar);
//echoes two encoded UTF-16 code units
echo $encSupplChar, "\n";
//and back
echo transliterator_transliterate("Hex-Any/Java", $encSupplChar), "\n";
?>

     
```

The above example will output something similar to:

```text


お早うございます
1
\uD834\uDD1E
𝄞


    
```

## See Also

`Transliterator::getErrorMessage()` `Transliterator::__construct()`
