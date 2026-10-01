---
id: "en-php-function-function-enchant-broker-get-dict-path"
language: "php"
lang: "en"
category: "function"
name: "enchant_broker_get_dict_path"
title: "Get the directory path for a given backend"
signature: "#[\\Deprecated(since: '8.0')] string|false enchant_broker_get_dict_path(EnchantBroker $broker, int $type)"
module: "enchant"
source_url: "https://www.php.net/manual/en/function.enchant-broker-get-dict-path.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the directory path for a given backend

## Description

```php
#[\Deprecated(since: '8.0')] string|false enchant_broker_get_dict_path(EnchantBroker $broker, int $type)
```

Get the directory path for a given backend.

## Parameters

- **`$broker`** — An Enchant broker returned by `enchant_broker_init()`.
- **`$type`** — The type of the dictionaries, i.e. `ENCHANT_MYSPELL` or `ENCHANT_ISPELL`.

## Return Values

Returns the path of the dictionary directory on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | This function has been deprecated. |
| 8.0.0 | `$broker` expects an `EnchantBroker` instance now; previously, a `resource` was expected. |

## Notes

> This function is only available if the extension has been compiled with Enchant v1.

## See Also

 `enchant_broker_set_dict_path()`
