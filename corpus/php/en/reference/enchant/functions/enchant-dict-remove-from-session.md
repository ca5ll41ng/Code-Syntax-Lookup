---
id: "en-php-function-function-enchant-dict-remove-from-session"
language: "php"
lang: "en"
category: "function"
name: "enchant_dict_remove_from_session"
title: "Remove a word from the session dictionary"
signature: "void enchant_dict_remove_from_session(EnchantDictionary $dictionary, string $word)"
module: "enchant"
source_url: "https://www.php.net/manual/en/function.enchant-dict-remove-from-session.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Remove a word from the session dictionary

## Description

```php
void enchant_dict_remove_from_session(EnchantDictionary $dictionary, string $word)
```

Removes a word that was previously added to the current spell-checking session via `enchant_dict_add_to_session()`.

## Parameters

- **`$dictionary`** — An Enchant dictionary returned by `enchant_broker_request_dict()` or `enchant_broker_request_pwl_dict()`.
- **`$word`** — The word to remove from the session.

## Return Values

No value is returned.

## See Also

 `enchant_dict_add_to_session()` `enchant_dict_remove()` `enchant_dict_is_added_to_session()`
