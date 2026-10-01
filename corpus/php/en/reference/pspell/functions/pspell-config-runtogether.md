---
id: "en-php-function-function-pspell-config-runtogether"
language: "php"
lang: "en"
category: "function"
name: "pspell_config_runtogether"
title: "Consider run-together words as valid compounds"
signature: "bool pspell_config_runtogether(PSpell\\Config $config, bool $allow)"
module: "pspell"
source_url: "https://www.php.net/manual/en/function.pspell-config-runtogether.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Consider run-together words as valid compounds

## Description

```php
bool pspell_config_runtogether(PSpell\Config $config, bool $allow)
```

This function determines whether run-together words will be treated as legal compounds. That is, "thecat" will be a legal compound, although there should be a space between the two words. Changing this setting only affects the results returned by `pspell_check()`; `pspell_suggest()` will still return suggestions.

`pspell_config_runtogether()` should be used on a config before calling `pspell_new_config()`.

## Parameters

- **`$config`** — An `PSpell\Config` instance.
- **`$allow`** — `true` if run-together words should be treated as legal compounds, `false` otherwise.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$config` parameter expects an `PSpell\Config` instance now; previously, a `resource` was expected. |

## Examples

**`pspell_config_runtogether()`**

```php


<?php
$pspell_config = pspell_config_create("en");
pspell_config_runtogether($pspell_config, true);
$pspell = pspell_new_config($pspell_config);
pspell_check($pspell, "thecat");
?>

    
```
