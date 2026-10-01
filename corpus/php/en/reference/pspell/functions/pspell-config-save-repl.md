---
id: "en-php-function-function-pspell-config-save-repl"
language: "php"
lang: "en"
category: "function"
name: "pspell_config_save_repl"
title: "Determine whether to save a replacement pairs list along with the wordlist"
signature: "bool pspell_config_save_repl(PSpell\\Config $config, bool $save)"
module: "pspell"
source_url: "https://www.php.net/manual/en/function.pspell-config-save-repl.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Determine whether to save a replacement pairs list along with the wordlist

## Description

```php
bool pspell_config_save_repl(PSpell\Config $config, bool $save)
```

`pspell_config_save_repl()` determines whether `pspell_save_wordlist()` will save the replacement pairs along with the wordlist. Usually there is no need to use this function because if `pspell_config_repl()` is used, the replacement pairs will be saved by `pspell_save_wordlist()` anyway, and if it is not, the replacement pairs will not be saved.

`pspell_config_save_repl()` should be used on a config before calling `pspell_new_config()`.

## Parameters

- **`$config`** — An `PSpell\Config` instance.
- **`$save`** — `true` if replacement pairs should be saved, `false` otherwise.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$config` parameter expects an `PSpell\Config` instance now; previously, a `resource` was expected. |

## Notes

> This function will not work unless you have pspell .11.2 and aspell .32.5 or later.
