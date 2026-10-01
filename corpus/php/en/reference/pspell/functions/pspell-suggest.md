---
id: "en-php-function-function-pspell-suggest"
language: "php"
lang: "en"
category: "function"
name: "pspell_suggest"
title: "Suggest spellings of a word"
signature: "array|false pspell_suggest(PSpell\\Dictionary $dictionary, string $word)"
module: "pspell"
source_url: "https://www.php.net/manual/en/function.pspell-suggest.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Suggest spellings of a word

## Description

```php
array|false pspell_suggest(PSpell\Dictionary $dictionary, string $word)
```

`pspell_suggest()` returns an array of possible spellings for the given word.

## Parameters

- **`$dictionary`** — An `PSpell\Dictionary` instance.
- **`$word`** — The tested word.

## Return Values

Returns an array of possible spellings.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$dictionary` parameter expects an `PSpell\Dictionary` instance now; previously, a `resource` was expected. |

## Examples

**`pspell_suggest()` example**

```php


<?php
$pspell = pspell_new("en");

if (!pspell_check($pspell, "testt")) {
    $suggestions = pspell_suggest($pspell, "testt");

    foreach ($suggestions as $suggestion) {
        echo "Possible spelling: $suggestion<br />";
    }
}
?>

    
```
