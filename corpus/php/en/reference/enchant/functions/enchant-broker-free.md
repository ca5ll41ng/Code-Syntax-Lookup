---
id: "en-php-function-function-enchant-broker-free"
language: "php"
lang: "en"
category: "function"
name: "enchant_broker_free"
title: "Free the broker resource and its dictionaries"
signature: "#[\\Deprecated(since: '8.0', message: 'as EnchantBroker objects are freed automatically')] bool enchant_broker_free(EnchantBroker $broker)"
module: "enchant"
source_url: "https://www.php.net/manual/en/function.enchant-broker-free.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Free the broker resource and its dictionaries

## Description

```php
#[\Deprecated(since: '8.0', message: 'as EnchantBroker objects are freed automatically')] bool enchant_broker_free(EnchantBroker $broker)
```

Free a broker with all its dictionaries. As of PHP 8.0.0, it is recommended to unset the object instead of calling this function.

## Parameters

- **`$broker`** — An Enchant broker returned by `enchant_broker_init()`.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | This function has been deprecated in favor of unsetting the object. |
| 8.0.0 | `$broker` expects an `EnchantBroker` instance now; previously, a `resource` was expected. |

## See Also

 `enchant_broker_init()`
