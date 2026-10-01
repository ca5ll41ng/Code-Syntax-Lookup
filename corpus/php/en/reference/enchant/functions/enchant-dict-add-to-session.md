---
id: "en-php-function-function-enchant-dict-add-to-session"
language: "php"
lang: "en"
category: "function"
name: "enchant_dict_add_to_session"
title: "Add 'word' to this spell-checking session"
signature: "void enchant_dict_add_to_session(EnchantDictionary $dictionary, string $word)"
module: "enchant"
source_url: "https://www.php.net/manual/en/function.enchant-dict-add-to-session.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add 'word' to this spell-checking session

## Description

```php
void enchant_dict_add_to_session(EnchantDictionary $dictionary, string $word)
```

Add a word to the given dictionary. It will be added only for the active spell-checking session.

## Parameters

- **`$dictionary`** — An Enchant dictionary returned by `enchant_broker_request_dict()` or `enchant_broker_request_pwl_dict()`.
- **`$word`** — The word to add

## Return Values

No value is returned.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$dictionary` expects an `EnchantDictionary` instance now; previously, a `resource` was expected. |

## See Also

 `enchant_broker_request_dict()`
