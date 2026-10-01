---
id: "en-php-function-function-soundex"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sanitizer"}
name: "soundex"
title: "Calculate the soundex key of a string"
signature: "string soundex(string $string)"
module: "strings"
source_url: "https://www.php.net/manual/en/function.soundex.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Calculate the soundex key of a string

## Description

```php
string soundex(string $string)
```

Calculates the soundex key of `$string`.

Soundex keys have the property that words pronounced similarly produce the same soundex key, and can thus be used to simplify searches in databases where you know the pronunciation but not the spelling.

This particular soundex function is one described by Donald Knuth in "The Art Of Computer Programming, vol. 3: Sorting And Searching", Addison-Wesley (1973), pp. 391-392.

## Parameters

- **`$string`** — The input string.

## Return Values

Returns the soundex key as a `string` with four characters. If at least one letter is contained in `$string`, the returned string starts with a letter. Otherwise `"0000"` is returned.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | Prior to this version, calling the function with an empty string returned `false` for no particular reason. |

## Examples

**Soundex Examples**

```php


<?php
echo soundex("Euler"), PHP_EOL, soundex("Ellery"), PHP_EOL;

soundex("Euler")       == soundex("Ellery");    // E460
soundex("Gauss")       == soundex("Ghosh");     // G200
soundex("Hilbert")     == soundex("Heilbronn"); // H416
soundex("Knuth")       == soundex("Kant");      // K530
soundex("Lloyd")       == soundex("Ladd");      // L300
soundex("Lukasiewicz") == soundex("Lissajous"); // L222
?>

    
```

## See Also

`levenshtein()` `metaphone()` `similar_text()`
