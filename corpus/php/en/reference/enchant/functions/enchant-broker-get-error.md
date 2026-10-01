---
id: "en-php-function-function-enchant-broker-get-error"
language: "php"
lang: "en"
category: "function"
name: "enchant_broker_get_error"
title: "Returns the last error of the broker"
signature: "string|false enchant_broker_get_error(EnchantBroker $broker)"
module: "enchant"
source_url: "https://www.php.net/manual/en/function.enchant-broker-get-error.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the last error of the broker

## Description

```php
string|false enchant_broker_get_error(EnchantBroker $broker)
```

Returns the last error which occurred in this broker.

## Parameters

- **`$broker`** — An Enchant broker returned by `enchant_broker_init()`.

## Return Values

Return the msg string if an error was found or `false`

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$broker` expects an `EnchantBroker` instance now; previously, a `resource` was expected. |
