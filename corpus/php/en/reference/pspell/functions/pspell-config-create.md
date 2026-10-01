---
id: "en-php-function-function-pspell-config-create"
language: "php"
lang: "en"
category: "function"
name: "pspell_config_create"
title: "Create a config used to open a dictionary"
signature: "PSpell\\Config pspell_config_create(string $language, string $spelling = \"\", string $jargon = \"\", string $encoding = \"\")"
module: "pspell"
source_url: "https://www.php.net/manual/en/function.pspell-config-create.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a config used to open a dictionary

## Description

```php
PSpell\Config pspell_config_create(string $language, string $spelling = "", string $jargon = "", string $encoding = "")
```

Create a config used to open a dictionary.

`pspell_config_create()` has a very similar syntax to `pspell_new()`. In fact, using `pspell_config_create()` immediately followed by `pspell_new_config()` will produce the exact same result. However, after creating a new config, you can also use `pspell_config_*()` functions before calling `pspell_new_config()` to take advantage of some advanced functionality.

For more information and examples, check out inline manual pspell website:[]().

## Parameters

- **`$language`** — The language parameter is the language code which consists of the two letter ISO 639 language code and an optional two letter ISO 3166 country code after a dash or underscore.
- **`$spelling`** — The spelling parameter is the requested spelling for languages with more than one spelling such as English. Known values are 'american', 'british', and 'canadian'.
- **`$jargon`** — The jargon parameter contains extra information to distinguish two different words lists that have the same language and spelling parameters.
- **`$encoding`** — The encoding parameter is the encoding that words are expected to be in. Valid values are 'utf-8', 'iso8859-*', 'koi8-r', 'viscii', 'cp1252', 'machine unsigned 16', 'machine unsigned 32'. This parameter is largely untested, so be careful when using.

## Return Values

Returns an `PSpell\Config` instance.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | Returns an `PSpell\Config` instance now; previously, a `resource` was returned. |

## Examples

**`pspell_config_create()`**

```php


<?php
$pspell_config = pspell_config_create("en");
pspell_config_personal($pspell_config, "/var/dictionaries/custom.pws");
pspell_config_repl($pspell_config, "/var/dictionaries/custom.repl");
$pspell = pspell_new_personal($pspell_config, "en");
?>

    
```
