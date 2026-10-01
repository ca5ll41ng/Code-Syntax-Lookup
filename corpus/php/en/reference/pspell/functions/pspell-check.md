---
id: "en-php-function-function-pspell-check"
language: "php"
lang: "en"
category: "function"
name: "pspell_check"
title: "Check a word"
signature: "bool pspell_check(PSpell\\Dictionary $dictionary, string $word)"
module: "pspell"
source_url: "https://www.php.net/manual/en/function.pspell-check.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check a word

## Description

```php
bool pspell_check(PSpell\Dictionary $dictionary, string $word)
```

`pspell_check()` checks the spelling of a word.

## Parameters

- **`$dictionary`** — An `PSpell\Dictionary` instance.
- **`$word`** — The tested word.

## Return Values

Returns `true` if the spelling is correct, `false` if not.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$dictionary` parameter expects an `PSpell\Dictionary` instance now; previously, a `resource` was expected. |

## Examples

**`pspell_check()` Example**

```php


<?php
$pspell = pspell_new("en");

if (pspell_check($pspell, "testt")) {
    echo "This is a valid spelling";
} else {
    echo "Sorry, wrong spelling";
}
?>

    
```
