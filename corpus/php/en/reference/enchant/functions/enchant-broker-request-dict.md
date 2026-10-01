---
id: "en-php-function-function-enchant-broker-request-dict"
language: "php"
lang: "en"
category: "function"
name: "enchant_broker_request_dict"
title: "Create a new dictionary using a tag"
signature: "EnchantDictionary|false enchant_broker_request_dict(EnchantBroker $broker, string $tag)"
module: "enchant"
source_url: "https://www.php.net/manual/en/function.enchant-broker-request-dict.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a new dictionary using a tag

## Description

```php
EnchantDictionary|false enchant_broker_request_dict(EnchantBroker $broker, string $tag)
```

create a new dictionary using tag, the non-empty language tag you wish to request a dictionary for ("en_US", "de_DE", ...)

## Parameters

- **`$broker`** — An Enchant broker returned by `enchant_broker_init()`.
- **`$tag`** — A tag describing the locale, for example en_US, de_DE

## Return Values

Returns a dictionary resource on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$broker` expects an `EnchantBroker` instance now; previously, a `resource` was expected. |
| 8.0.0 | On success, this function returns an `EnchantDictionary` instance now; previously, a `resource` was returned. |

## Examples

**A `enchant_broker_request_dict()` example**

Check if a dictionary exists using `enchant_broker_dict_exists()` and request it.

```php


<?php
$tag = 'en_US';
$broker = enchant_broker_init();
if (enchant_broker_dict_exists($broker,$tag)) {
    $dict = enchant_broker_request_dict($broker, $tag);
    var_dump($dict);
}
?>

   
```

## See Also

 `enchant_dict_describe()` `enchant_broker_dict_exists()` `enchant_broker_free_dict()`
