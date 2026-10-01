---
id: "en-php-function-function-pspell-new-config"
language: "php"
lang: "en"
category: "function"
name: "pspell_new_config"
title: "Load a new dictionary with settings based on a given config"
signature: "PSpell\\Dictionary|false pspell_new_config(PSpell\\Config $config)"
module: "pspell"
source_url: "https://www.php.net/manual/en/function.pspell-new-config.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Load a new dictionary with settings based on a given config

## Description

```php
PSpell\Dictionary|false pspell_new_config(PSpell\Config $config)
```

`pspell_new_config()` opens up a new dictionary with settings specified in a `$config`, created with `pspell_config_create()` and modified with `pspell_config_*()` functions. This method provides you with the most flexibility and has all the functionality provided by `pspell_new()` and `pspell_new_personal()`.

## Parameters

- **`$config`** — The `$config` parameter is the one returned by `pspell_config_create()` when the config was created.

## Return Values

Returns an `PSpell\Dictionary` instance on success, or `false` on failure

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$config` parameter expects an `PSpell\Config` instance now; previously, a `resource` was expected. |
| 8.1.0 | Returns an `PSpell\Dictionary` instance now; previously, a `resource` was returned. |

## Examples

**`pspell_new_config()`**

```php


<?php
$pspell_config = pspell_config_create("en");
pspell_config_personal($pspell_config, "/var/dictionaries/custom.pws");
pspell_config_repl($pspell_config, "/var/dictionaries/custom.repl");
$pspell = pspell_new_config($pspell_config);
?>

    
```
