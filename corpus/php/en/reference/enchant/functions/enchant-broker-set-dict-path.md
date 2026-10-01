---
id: "en-php-function-function-enchant-broker-set-dict-path"
language: "php"
lang: "en"
category: "function"
name: "enchant_broker_set_dict_path"
title: "Set the directory path for a given backend"
signature: "#[\\Deprecated(since: '8.0')] bool enchant_broker_set_dict_path(EnchantBroker $broker, int $type, string $path)"
module: "enchant"
source_url: "https://www.php.net/manual/en/function.enchant-broker-set-dict-path.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the directory path for a given backend

## Description

```php
#[\Deprecated(since: '8.0')] bool enchant_broker_set_dict_path(EnchantBroker $broker, int $type, string $path)
```

Set the directory path for a given backend.

## Parameters

- **`$broker`** — An Enchant broker returned by `enchant_broker_init()`.
- **`$type`** — The type of the dictionaries, i.e. `ENCHANT_MYSPELL` or `ENCHANT_ISPELL`.
- **`$path`** — The path of the dictionary directory.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | This function has been deprecated. |
| 8.0.0 | `$broker` expects an `EnchantBroker` instance now; previously, a `resource` was expected. |

## Notes

> This function is only available if the extension has been compiled with Enchant v1.

## See Also

 `enchant_broker_get_dict_path()`
