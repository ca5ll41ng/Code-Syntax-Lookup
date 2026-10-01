---
id: "en-php-function-function-enchant-dict-is-added"
language: "php"
lang: "en"
category: "function"
name: "enchant_dict_is_added"
title: "Whether or not 'word' exists in this spelling-session"
signature: "bool enchant_dict_is_added(EnchantDictionary $dictionary, string $word)"
module: "enchant"
source_url: "https://www.php.net/manual/en/function.enchant-dict-is-added.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Whether or not 'word' exists in this spelling-session

## Description

```php
bool enchant_dict_is_added(EnchantDictionary $dictionary, string $word)
```

Tells whether or not a word already exists in the current session.

## Parameters

- **`$dictionary`** — An Enchant dictionary returned by `enchant_broker_request_dict()` or `enchant_broker_request_pwl_dict()`.
- **`$word`** — The word to lookup

## Return Values

Returns `true` if the word exists or `false`

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$dictionary` expects an `EnchantDictionary` instance now; previously, a `resource` was expected. |

## See Also

 `enchant_dict_add_to_session()`
