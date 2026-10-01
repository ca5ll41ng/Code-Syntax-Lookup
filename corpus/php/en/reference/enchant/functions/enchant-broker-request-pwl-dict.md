---
id: "en-php-function-function-enchant-broker-request-pwl-dict"
language: "php"
lang: "en"
category: "function"
name: "enchant_broker_request_pwl_dict"
title: "Creates a dictionary using a PWL file"
signature: "EnchantDictionary|false enchant_broker_request_pwl_dict(EnchantBroker $broker, string $filename)"
module: "enchant"
source_url: "https://www.php.net/manual/en/function.enchant-broker-request-pwl-dict.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a dictionary using a PWL file

## Description

```php
EnchantDictionary|false enchant_broker_request_pwl_dict(EnchantBroker $broker, string $filename)
```

Creates a dictionary using a PWL file. A PWL file is a personal word file with one word per line.

## Parameters

- **`$broker`** — An Enchant broker returned by `enchant_broker_init()`.
- **`$filename`** — Path to the PWL file. If there is no such file, a new one will be created if possible.

## Return Values

Returns a dictionary resource on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$broker` expects an `EnchantBroker` instance now; previously, a `resource` was expected. |
| 8.0.0 | On success, this function returns an `EnchantDictionary` instance now; previously, a `resource` was returned. |

## See Also

 `enchant_dict_describe()` `enchant_broker_dict_exists()` `enchant_broker_free_dict()`
