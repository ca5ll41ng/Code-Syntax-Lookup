---
id: "en-php-function-function-pspell-config-ignore"
language: "php"
lang: "en"
category: "function"
name: "pspell_config_ignore"
title: "Ignore words less than N characters long"
signature: "bool pspell_config_ignore(PSpell\\Config $config, int $min_length)"
module: "pspell"
source_url: "https://www.php.net/manual/en/function.pspell-config-ignore.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Ignore words less than N characters long

## Description

```php
bool pspell_config_ignore(PSpell\Config $config, int $min_length)
```

`pspell_config_ignore()` should be used on a config before calling `pspell_new_config()`. This function allows short words to be skipped by the spell checker.

## Parameters

- **`$config`** — An `PSpell\Config` instance.
- **`$min_length`** — Words less than `$min_length` characters will be skipped.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$config` parameter expects an `PSpell\Config` instance now; previously, a `resource` was expected. |

## Examples

**`pspell_config_ignore()`**

```php


<?php
$pspell_config = pspell_config_create("en");
pspell_config_ignore($pspell_config, 5);
$pspell = pspell_new_config($pspell_config);
pspell_check($pspell, "abcd");    //will not result in an error
?>

    
```
