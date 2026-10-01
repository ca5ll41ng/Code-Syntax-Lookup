---
id: "en-php-function-function-metaphone"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sanitizer"}
name: "metaphone"
title: "Calculate the metaphone key of a string"
signature: "string metaphone(string $string, int $max_phonemes = 0)"
module: "strings"
source_url: "https://www.php.net/manual/en/function.metaphone.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Calculate the metaphone key of a string

## Description

```php
string metaphone(string $string, int $max_phonemes = 0)
```

Calculates the metaphone key of `$string`.

Similar to `soundex()` metaphone creates the same key for similar sounding words. It's more accurate than `soundex()` as it knows the basic rules of English pronunciation. The metaphone generated keys are of variable length.

Metaphone was developed by Lawrence Philips <lphilips at verity dot com>. It is described in ["Practical Algorithms for Programmers", Binstock & Rex, Addison Wesley, 1995].

## Parameters

- **`$string`** — The input string.
- **`$max_phonemes`** — This parameter restricts the returned metaphone key to `$max_phonemes` *characters* in length. However, the resulting phonemes are always transcribed completely, so the resulting string length may be slightly longer than `$max_phonemes`. The default value of `0` means no restriction.

## Return Values

Returns the metaphone key as a string.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | The function returned `false` on failure. |

## Examples

 {{{ 

**`metaphone()` basic example**

 {{{ 

```php


<?php
var_dump(metaphone('programming'));
var_dump(metaphone('programmer'));
?>

    
```

The above example will output:

```text


string(7) "PRKRMNK"
string(6) "PRKRMR"

    
```

**Using the `$max_phonemes` parameter**

 {{{ 

```php


<?php
var_dump(metaphone('programming', 5));
var_dump(metaphone('programmer', 5));
?>

    
```

The above example will output:

```text


string(5) "PRKRM"
string(5) "PRKRM"

    
```

**Using the `$max_phonemes` parameter**

In this example, `metaphone()` is advised to produce a string of five characters, but that would require to split the final phoneme (`'x'` is supposed to be transcribed to `'KS'`), so the function returns a string with six characters.

```php


<?php
var_dump(metaphone('Asterix', 5));
?>

    
```

The above example will output:

```text


string(6) "ASTRKS"

    
```

 }}} 

## See Also

`levenshtein()` `similar_text()` `soundex()`
