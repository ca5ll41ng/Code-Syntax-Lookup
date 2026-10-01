---
id: "en-php-function-function-enchant-broker-describe"
language: "php"
lang: "en"
category: "function"
name: "enchant_broker_describe"
title: "Enumerates the Enchant providers"
signature: "array enchant_broker_describe(EnchantBroker $broker)"
module: "enchant"
source_url: "https://www.php.net/manual/en/function.enchant-broker-describe.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Enumerates the Enchant providers

## Description

```php
array enchant_broker_describe(EnchantBroker $broker)
```

Enumerates the Enchant providers and tells you some rudimentary information about them. The same info is provided through phpinfo().

## Parameters

- **`$broker`** — An Enchant broker returned by `enchant_broker_init()`.

## Return Values

Returns an `array` of available Enchant providers with their details.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$broker` expects an `EnchantBroker` instance now; previously, a `resource` was expected. |
| 8.0.0 | Prior to this version, the function returned `false` on failure. |

## Examples

**List the backends provided by the given broker**

```php


<?php
$r = enchant_broker_init();
$bprovides = enchant_broker_describe($r);
echo "Current broker provides the following backend(s):\n";
print_r($bprovides);

?>

   
```

The above example will output something similar to:

```text


Current broker provides the following backend(s):
Array
(
    [0] => Array
        (
            [name] => aspell
            [desc] => Aspell Provider
            [file] => /usr/lib/enchant/libenchant_aspell.so
        )

    [1] => Array
        (
            [name] => hspell
            [desc] => Hspell Provider
            [file] => /usr/lib/enchant/libenchant_hspell.so
        )

    [2] => Array
        (
            [name] => ispell
            [desc] => Ispell Provider
            [file] => /usr/lib/enchant/libenchant_ispell.so
        )

    [3] => Array
        (
            [name] => myspell
            [desc] => Myspell Provider
            [file] => /usr/lib/enchant/libenchant_myspell.so
        )

)

   
```
