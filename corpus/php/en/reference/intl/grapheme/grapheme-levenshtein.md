---
id: "en-php-function-function-grapheme-levenshtein"
language: "php"
lang: "en"
category: "function"
name: "grapheme_levenshtein"
title: "Calculate Levenshtein distance between two strings in grapheme units"
signature: "int|false grapheme_levenshtein(string $string1, string $string2, int $insertion_cost = 1, int $replacement_cost = 1, int $deletion_cost = 1, string $locale = \"\")"
module: "intl"
source_url: "https://www.php.net/manual/en/function.grapheme-levenshtein.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Calculate Levenshtein distance between two strings in grapheme units

## Description

Procedural style

```php
int|false grapheme_levenshtein(string $string1, string $string2, int $insertion_cost = 1, int $replacement_cost = 1, int $deletion_cost = 1, string $locale = "")
```

The Levenshtein distance is defined as the minimal number of grapheme clusters that have to be replaced, inserted, or deleted to transform `$string1` into `$string2`. The complexity of the algorithm is `O(m*n)`, where `n` and `m` are the length of `$string1` and `$string2` in grapheme units.

Unlike `levenshtein()`, which operates on bytes, this function counts Unicode grapheme clusters, so composed and decomposed forms of the same character (e.g. `U+00E9` and `U+0065 U+0301`, both representing `é`) are treated as equivalent and have a distance of zero.

If `$insertion_cost`, `$replacement_cost` and/or `$deletion_cost` are unequal to `1`, the algorithm adapts to choose the cheapest transforms. For example, if `$insertion_cost + $deletion_cost < $replacement_cost`, no replacements will be done, but rather inserts and deletions instead.

## Parameters

- **`$string1`** — One of the strings being evaluated for Levenshtein distance. Must be valid UTF-8.
- **`$string2`** — One of the strings being evaluated for Levenshtein distance. Must be valid UTF-8.
- **`$insertion_cost`** — Defines the cost of insertion. Must be greater than `0`.
- **`$replacement_cost`** — Defines the cost of replacement. Must be greater than `0`.
- **`$deletion_cost`** — Defines the cost of deletion. Must be greater than `0`.
- **`$locale`** — Locale to use.

## Return Values

Returns the Levenshtein distance between the two strings, measured in grapheme units, or `false` on failure. Use `intl_get_error_message()` to retrieve details about the failure.

## Errors/Exceptions

Throws a ValueError if `$insertion_cost`, `$replacement_cost`, or `$deletion_cost` is less than or equal to `0`.

Returns `false` and sets an intl error if either input string is not valid UTF-8, if `$locale` is not a valid locale identifier, or if an internal ICU error occurs.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | This function has been added. |

## Examples

**`grapheme_levenshtein()` example**

```php


<?php

// Composed form (NFC): U+00E9 LATIN SMALL LETTER E WITH ACUTE
$e_composed = "\u{00E9}";

// Decomposed form (NFD): U+0065 + U+0301 (e + combining acute accent)
$e_decomposed = "\u{0065}\u{0301}";

// grapheme_levenshtein treats them as the same grapheme cluster
var_dump(grapheme_levenshtein($e_composed, $e_decomposed));

// levenshtein() operates on bytes and sees them as different
var_dump(levenshtein($e_composed, $e_decomposed));

?>

   
```

The above example will output:

```text


int(0)
int(3)

   
```

## See Also

`levenshtein()` `grapheme_strlen()` `grapheme_substr()` `similar_text()` [Unicode Text Segmentation: Grapheme Cluster Boundaries]()
