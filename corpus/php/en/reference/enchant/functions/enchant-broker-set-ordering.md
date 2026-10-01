---
id: "en-php-function-function-enchant-broker-set-ordering"
language: "php"
lang: "en"
category: "function"
name: "enchant_broker_set_ordering"
title: "Declares a preference of dictionaries to use for the language"
signature: "bool enchant_broker_set_ordering(EnchantBroker $broker, string $tag, string $ordering)"
module: "enchant"
source_url: "https://www.php.net/manual/en/function.enchant-broker-set-ordering.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Declares a preference of dictionaries to use for the language

## Description

```php
bool enchant_broker_set_ordering(EnchantBroker $broker, string $tag, string $ordering)
```

Declares a preference of dictionaries to use for the language described/referred to by 'tag'. The ordering is a comma delimited list of provider names. As a special exception, the "*" tag can be used as a language tag to declare a default ordering for any language that does not explicitly declare an ordering.

## Parameters

- **`$broker`** — An Enchant broker returned by `enchant_broker_init()`.
- **`$tag`** — Language tag. The special "*" tag can be used as a language tag to declare a default ordering for any language that does not explicitly declare an ordering.
- **`$ordering`** — Comma delimited list of provider names

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$broker` expects an `EnchantBroker` instance now; previously, a `resource` was expected. |
