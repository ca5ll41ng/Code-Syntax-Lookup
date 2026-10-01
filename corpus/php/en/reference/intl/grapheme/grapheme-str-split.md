---
id: "en-php-function-function-grapheme-str-split"
language: "php"
lang: "en"
category: "function"
name: "grapheme_str_split"
title: "Split a string into an array"
signature: "array|false grapheme_str_split(string $string, int $length = 1)"
module: "intl"
source_url: "https://www.php.net/manual/en/function.grapheme-str-split.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Split a string into an array

## Description

```php
array|false grapheme_str_split(string $string, int $length = 1)
```

This function will return an array of strings, it is a version of `str_split()` with support for grapheme cluster byte characters. If the `$length` parameter is specified, the string is broken down into chunks of the specified length in grapheme clusters (not bytes).

## Parameters

- **`$string`** — The `string` to split into grapheme clusters or chunks. `$string` must be valid UTF-8.
- **`$length`** — Each element of the returned array will be composed of `$length` grapheme clusters.

## Return Values

`grapheme_str_split()` returns an array of strings, or `false` on failure.

## Errors/Exceptions

If `$length` is less than `1`, a `ValueError` will be thrown.

## See Also

 `str_split()` `mb_str_split()`  [Unicode Text Segmentation: Grapheme Cluster Boundaries]()
