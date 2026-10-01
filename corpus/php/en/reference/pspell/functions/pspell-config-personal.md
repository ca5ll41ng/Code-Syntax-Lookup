---
id: "en-php-function-function-pspell-config-personal"
language: "php"
lang: "en"
category: "function"
name: "pspell_config_personal"
title: "Set a file that contains personal wordlist"
signature: "bool pspell_config_personal(PSpell\\Config $config, string $filename)"
module: "pspell"
source_url: "https://www.php.net/manual/en/function.pspell-config-personal.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set a file that contains personal wordlist

## Description

```php
bool pspell_config_personal(PSpell\Config $config, string $filename)
```

Set a file that contains personal wordlist. The personal wordlist will be loaded and used in addition to the standard one after you call `pspell_new_config()`. The file is also the file where `pspell_save_wordlist()` will save personal wordlist to.

`pspell_config_personal()` should be used on a config before calling `pspell_new_config()`.

## Parameters

- **`$config`** — An `PSpell\Config` instance.
- **`$filename`** — The personal wordlist. If the file does not exist, it will be created. The file should be writable by whoever PHP runs as (e.g. nobody).

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$config` parameter expects an `PSpell\Config` instance now; previously, a `resource` was expected. |

## Examples

**`pspell_config_personal()`**

```php


<?php
$pspell_config = pspell_config_create("en");
pspell_config_personal($pspell_config, "/var/dictionaries/custom.pws");
$pspell = pspell_new_config($pspell_config);
pspell_check($pspell, "thecat");
?>

    
```

## Notes

> This function will not work unless you have pspell .11.2 and aspell .32.5 or later.
