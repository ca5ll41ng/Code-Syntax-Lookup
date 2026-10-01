---
id: "en-php-function-function-pspell-config-mode"
language: "php"
lang: "en"
category: "function"
name: "pspell_config_mode"
title: "Change the mode number of suggestions returned"
signature: "bool pspell_config_mode(PSpell\\Config $config, int $mode)"
module: "pspell"
source_url: "https://www.php.net/manual/en/function.pspell-config-mode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Change the mode number of suggestions returned

## Description

```php
bool pspell_config_mode(PSpell\Config $config, int $mode)
```

`pspell_config_mode()` should be used on a config before calling `pspell_new_config()`. This function determines how many suggestions will be returned by `pspell_suggest()`.

## Parameters

- **`$config`** — An `PSpell\Config` instance.
- **`$mode`** — The mode parameter is the mode in which spellchecker will work. There are several modes available: - `PSPELL_FAST` - Fast mode (least number of suggestions) - `PSPELL_NORMAL` - Normal mode (more suggestions) - `PSPELL_BAD_SPELLERS` - Slow mode (a lot of suggestions)

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$config` parameter expects an `PSpell\Config` instance now; previously, a `resource` was expected. |

## Examples

**`pspell_config_mode()` Example**

```php


<?php
$pspell_config = pspell_config_create("en");
pspell_config_mode($pspell_config, PSPELL_FAST);
$pspell = pspell_new_config($pspell_config);
pspell_check($pspell, "thecat");
?>

    
```
