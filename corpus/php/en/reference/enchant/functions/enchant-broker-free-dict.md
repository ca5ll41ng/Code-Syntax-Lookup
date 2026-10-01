---
id: "en-php-function-function-enchant-broker-free-dict"
language: "php"
lang: "en"
category: "function"
name: "enchant_broker_free_dict"
title: "Free a dictionary resource"
signature: "#[\\Deprecated(since: '8.0', message: 'as EnchantDictionary objects are freed automatically')] bool enchant_broker_free_dict(EnchantDictionary $dictionary)"
module: "enchant"
source_url: "https://www.php.net/manual/en/function.enchant-broker-free-dict.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Free a dictionary resource

## Description

```php
#[\Deprecated(since: '8.0', message: 'as EnchantDictionary objects are freed automatically')] bool enchant_broker_free_dict(EnchantDictionary $dictionary)
```

Free a dictionary. As of PHP 8.0.0, it is recommended to unset the object instead of calling this function.

## Parameters

- **`$dictionary`** — An Enchant dictionary returned by `enchant_broker_request_dict()` or `enchant_broker_request_pwl_dict()`.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | This function has been deprecated in favor of unsetting the object. |
| 8.0.0 | `$dictionary` expects a `EnchantDictionary` now; previously, a `resource` was expected. |

## See Also

 `enchant_broker_request_dict()` `enchant_broker_request_pwl_dict()`
