---
id: "en-php-function-function-pspell-add-to-personal"
language: "php"
lang: "en"
category: "function"
name: "pspell_add_to_personal"
title: "Add the word to a personal wordlist"
signature: "bool pspell_add_to_personal(PSpell\\Dictionary $dictionary, string $word)"
module: "pspell"
source_url: "https://www.php.net/manual/en/function.pspell-add-to-personal.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add the word to a personal wordlist

## Description

```php
bool pspell_add_to_personal(PSpell\Dictionary $dictionary, string $word)
```

`pspell_add_to_personal()` adds a word to the personal wordlist. If you used `pspell_new_config()` with `pspell_config_personal()` to open the dictionary, you can save the wordlist later with `pspell_save_wordlist()`.

## Parameters

- **`$dictionary`** — An `PSpell\Dictionary` instance.
- **`$word`** — The added word.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$dictionary` parameter expects an `PSpell\Dictionary` instance now; previously, a `resource` was expected. |

## Examples

**`pspell_add_to_personal()`**

```php


<?php
$pspell_config = pspell_config_create("en");
pspell_config_personal($pspell_config, "/var/dictionaries/custom.pws");
$pspell = pspell_new_config($pspell_config);

pspell_add_to_personal($pspell, "Vlad");
pspell_save_wordlist($pspell);
?>

    
```

## Notes

> This function will not work unless you have pspell .11.2 and aspell .32.5 or later.
