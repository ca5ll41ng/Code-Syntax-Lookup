---
id: "en-php-function-function-enchant-dict-get-error"
language: "php"
lang: "en"
category: "function"
name: "enchant_dict_get_error"
title: "Returns the last error of the current spelling-session"
signature: "string|false enchant_dict_get_error(EnchantDictionary $dictionary)"
module: "enchant"
source_url: "https://www.php.net/manual/en/function.enchant-dict-get-error.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the last error of the current spelling-session

## Description

```php
string|false enchant_dict_get_error(EnchantDictionary $dictionary)
```

Returns the last error of the current spelling-session

## Parameters

- **`$dictionary`** — An Enchant dictionary returned by `enchant_broker_request_dict()` or `enchant_broker_request_pwl_dict()`.

## Return Values

Returns the error message as string or `false` if no error occurred.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$dictionary` expects an `EnchantDictionary` instance now; previously, a `resource` was expected. |
