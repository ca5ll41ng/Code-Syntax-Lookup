---
id: "en-php-function-function-enchant-dict-store-replacement"
language: "php"
lang: "en"
category: "function"
name: "enchant_dict_store_replacement"
title: "Add a correction for a word"
signature: "void enchant_dict_store_replacement(EnchantDictionary $dictionary, string $misspelled, string $correct)"
module: "enchant"
source_url: "https://www.php.net/manual/en/function.enchant-dict-store-replacement.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add a correction for a word

## Description

```php
void enchant_dict_store_replacement(EnchantDictionary $dictionary, string $misspelled, string $correct)
```

Add a correction for 'mis' using 'cor'. Notes that you replaced @mis with @cor, so it's possibly more likely that future occurrences of @mis will be replaced with @cor. So it might bump @cor up in the suggestion list.

## Parameters

- **`$dictionary`** — An Enchant dictionary returned by `enchant_broker_request_dict()` or `enchant_broker_request_pwl_dict()`.
- **`$misspelled`** — The word to fix
- **`$correct`** — The correct word

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$dictionary` expects an `EnchantDictionary` instance now; previously, a `resource` was expected. |
