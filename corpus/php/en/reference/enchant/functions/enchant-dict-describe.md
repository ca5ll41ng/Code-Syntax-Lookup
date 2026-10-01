---
id: "en-php-function-function-enchant-dict-describe"
language: "php"
lang: "en"
category: "function"
name: "enchant_dict_describe"
title: "Describes an individual dictionary"
signature: "array enchant_dict_describe(EnchantDictionary $dictionary)"
module: "enchant"
source_url: "https://www.php.net/manual/en/function.enchant-dict-describe.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Describes an individual dictionary

## Description

```php
array enchant_dict_describe(EnchantDictionary $dictionary)
```

Returns the details of the dictionary.

## Parameters

- **`$dictionary`** — An Enchant dictionary returned by `enchant_broker_request_dict()` or `enchant_broker_request_pwl_dict()`.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$dictionary` expects an `EnchantDictionary` instance now; previously, a `resource` was expected. |
| 8.0.0 | Prior to this version, the function returned `false` on failure. |

## Examples

**A `enchant_dict_describe()` example**

Check if a dictionary exists using `enchant_broker_dict_exists()` and show the detail of it.

```php


<?php
$tag = 'en_US';
$broker = enchant_broker_init();
if (enchant_broker_dict_exists($broker, $tag)) {
    $dict = enchant_broker_request_dict($broker, $tag);
    $dict_details = enchant_dict_describe($dict);
    print_r($dict_details);
}
?>

   
```

The above example will output something similar to:

```text


Array
(
    [lang] => en_US
    [name] => aspell
    [desc] => Aspell Provider
    [file] => /usr/lib/enchant/libenchant_aspell.so
)

   
```
