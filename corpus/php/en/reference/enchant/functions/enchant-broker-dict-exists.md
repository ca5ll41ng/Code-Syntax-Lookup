---
id: "en-php-function-function-enchant-broker-dict-exists"
language: "php"
lang: "en"
category: "function"
name: "enchant_broker_dict_exists"
title: "Whether a dictionary exists or not"
signature: "bool enchant_broker_dict_exists(EnchantBroker $broker, string $tag)"
module: "enchant"
source_url: "https://www.php.net/manual/en/function.enchant-broker-dict-exists.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Whether a dictionary exists or not

## Description

```php
bool enchant_broker_dict_exists(EnchantBroker $broker, string $tag)
```

Tells if a dictionary exists or not, using a non-empty tags

## Parameters

- **`$broker`** — An Enchant broker returned by `enchant_broker_init()`.
- **`$tag`** — non-empty tag in the LOCALE format, ex: us_US, ch_DE, etc.

## Return Values

Returns `true` when the tag exist or `false` when not.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$broker` expects an `EnchantBroker` instance now; previously, a `resource` was expected. |

## Examples

**A `enchant_broker_dict_exists()` example**

```php


<?php
$tag = 'en_US';
$r = enchant_broker_init();
if (enchant_broker_dict_exists($r,$tag)) {
    echo $tag . " dictionary found.\n";
}
?>

   
```

## See Also

 `enchant_broker_describe()`
