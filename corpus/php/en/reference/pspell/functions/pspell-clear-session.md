---
id: "en-php-function-function-pspell-clear-session"
language: "php"
lang: "en"
category: "function"
name: "pspell_clear_session"
title: "Clear the current session"
signature: "bool pspell_clear_session(PSpell\\Dictionary $dictionary)"
module: "pspell"
source_url: "https://www.php.net/manual/en/function.pspell-clear-session.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Clear the current session

## Description

```php
bool pspell_clear_session(PSpell\Dictionary $dictionary)
```

`pspell_clear_session()` clears the current session. The current wordlist becomes blank, and, for example, if you try to save it with `pspell_save_wordlist()`, nothing happens.

## Parameters

- **`$dictionary`** — An `PSpell\Dictionary` instance.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$dictionary` parameter expects an `PSpell\Dictionary` instance now; previously, a `resource` was expected. |

## Examples

**`pspell_add_to_personal()` Example**

```php


<?php
$pspell_config = pspell_config_create("en");
pspell_config_personal($pspell_config, "/var/dictionaries/custom.pws");
$pspell = pspell_new_config($pspell_config);

pspell_add_to_personal($pspell, "Vlad");
pspell_clear_session($pspell);
pspell_save_wordlist($pspell);    //"Vlad" will not be saved
?>

    
```
