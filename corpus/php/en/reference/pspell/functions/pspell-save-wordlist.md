---
id: "en-php-function-function-pspell-save-wordlist"
language: "php"
lang: "en"
category: "function"
name: "pspell_save_wordlist"
title: "Save the personal wordlist to a file"
signature: "bool pspell_save_wordlist(PSpell\\Dictionary $dictionary)"
module: "pspell"
source_url: "https://www.php.net/manual/en/function.pspell-save-wordlist.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Save the personal wordlist to a file

## Description

```php
bool pspell_save_wordlist(PSpell\Dictionary $dictionary)
```

`pspell_save_wordlist()` saves the personal wordlist from the current session. The location of files to be saved specified with `pspell_config_personal()` and (optionally) `pspell_config_repl()`.

## Parameters

- **`$dictionary`** — An `PSpell\Dictionary` instance.

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
pspell_config_personal($pspell_config, "/tmp/dicts/newdict");
$pspell = pspell_new_config($pspell_config);

pspell_add_to_personal($pspell, "Vlad");
pspell_save_wordlist($pspell);
?>

    
```

## Notes

> This function will not work unless you have pspell .11.2 and aspell .32.5 or later.
