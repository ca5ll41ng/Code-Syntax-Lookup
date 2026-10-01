---
id: "en-php-function-function-enchant-broker-list-dicts"
language: "php"
lang: "en"
category: "function"
name: "enchant_broker_list_dicts"
title: "Returns a list of available dictionaries"
signature: "array enchant_broker_list_dicts(EnchantBroker $broker)"
module: "enchant"
source_url: "https://www.php.net/manual/en/function.enchant-broker-list-dicts.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a list of available dictionaries

## Description

```php
array enchant_broker_list_dicts(EnchantBroker $broker)
```

Returns a list of available dictionaries with their details.

## Parameters

- **`$broker`** — An Enchant broker returned by `enchant_broker_init()`.

## Return Values

Returns an `array` of available dictionaries with their details.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$broker` expects an `EnchantBroker` instance now; previously, a `resource` was expected. |
| 8.0.0 | Prior to this version, the function returned `false` on failure. |

## Examples

**List all available dictionaries for one broker**

```php


<?php
$r = enchant_broker_init();
$dicts = enchant_broker_list_dicts($r);
print_r($dicts);
?>

   
```

The above example will output something similar to:

```text


Array
(
    [0] => Array
        (
            [lang_tag] => de
            [provider_name] => aspell
            [provider_desc] => Aspell Provider
            [provider_file] => /usr/lib/enchant/libenchant_aspell.so
        )

    [1] => Array
        (
            [lang_tag] => de_DE
            [provider_name] => aspell
            [provider_desc] => Aspell Provider
            [provider_file] => /usr/lib/enchant/libenchant_aspell.so
        )

    [3] => Array
        (
            [lang_tag] => en
            [provider_name] => aspell
            [provider_desc] => Aspell Provider
            [provider_file] => /usr/lib/enchant/libenchant_aspell.so
        )

    [4] => Array
        (
            [lang_tag] => en_GB
            [provider_name] => aspell
            [provider_desc] => Aspell Provider
            [provider_file] => /usr/lib/enchant/libenchant_aspell.so
        )

    [5] => Array
        (
            [lang_tag] => en_US
            [provider_name] => aspell
            [provider_desc] => Aspell Provider
            [provider_file] => /usr/lib/enchant/libenchant_aspell.so
        )

    [6] => Array
        (
            [lang_tag] => hi_IN
            [provider_name] => myspell
            [provider_desc] => Myspell Provider
            [provider_file] => /usr/lib/enchant/libenchant_myspell.so
        )

)

   
```

## See Also

 `enchant_broker_describe()`
