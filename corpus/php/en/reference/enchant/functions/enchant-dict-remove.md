---
id: "en-php-function-function-enchant-dict-remove"
language: "php"
lang: "en"
category: "function"
name: "enchant_dict_remove"
title: "Add a word to the exclusion list and remove it from the personal dictionary"
signature: "void enchant_dict_remove(EnchantDictionary $dictionary, string $word)"
module: "enchant"
source_url: "https://www.php.net/manual/en/function.enchant-dict-remove.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add a word to the exclusion list and remove it from the personal dictionary

## Description

```php
void enchant_dict_remove(EnchantDictionary $dictionary, string $word)
```

Adds a word to the exclusion list of the given dictionary, preventing it from being accepted as correctly spelled. If the word was previously added to the personal dictionary, it is also removed from there.

## Parameters

- **`$dictionary`** — An Enchant dictionary returned by `enchant_broker_request_dict()` or `enchant_broker_request_pwl_dict()`.
- **`$word`** — The word to exclude.

## Return Values

No value is returned.

## See Also

 `enchant_dict_add()` `enchant_dict_remove_from_session()` `enchant_dict_is_added()`
