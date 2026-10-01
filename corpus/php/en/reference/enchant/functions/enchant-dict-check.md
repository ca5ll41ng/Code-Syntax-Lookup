---
id: "en-php-function-function-enchant-dict-check"
language: "php"
lang: "en"
category: "function"
name: "enchant_dict_check"
title: "Check whether a word is correctly spelled or not"
signature: "bool enchant_dict_check(EnchantDictionary $dictionary, string $word)"
module: "enchant"
source_url: "https://www.php.net/manual/en/function.enchant-dict-check.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check whether a word is correctly spelled or not

## Description

```php
bool enchant_dict_check(EnchantDictionary $dictionary, string $word)
```

If the word is correctly spelled return `true`, otherwise return `false`

## Parameters

- **`$dictionary`** — An Enchant dictionary returned by `enchant_broker_request_dict()` or `enchant_broker_request_pwl_dict()`.
- **`$word`** — The word to check

## Return Values

Returns `true` if the word is spelled correctly, `false` if not.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$dictionary` expects an `EnchantDictionary` instance now; previously, a `resource` was expected. |
