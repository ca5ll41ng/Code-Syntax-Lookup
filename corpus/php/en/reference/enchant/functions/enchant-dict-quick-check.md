---
id: "en-php-function-function-enchant-dict-quick-check"
language: "php"
lang: "en"
category: "function"
name: "enchant_dict_quick_check"
title: "Check the word is correctly spelled and provide suggestions"
signature: "bool enchant_dict_quick_check(EnchantDictionary $dictionary, string $word, array $suggestions = null)"
module: "enchant"
source_url: "https://www.php.net/manual/en/function.enchant-dict-quick-check.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check the word is correctly spelled and provide suggestions

## Description

```php
bool enchant_dict_quick_check(EnchantDictionary $dictionary, string $word, array $suggestions = null)
```

If the word is correctly spelled return `true`, otherwise return `false`, if suggestions variable is provided, fill it with spelling alternatives.

## Parameters

- **`$dictionary`** — An Enchant dictionary returned by `enchant_broker_request_dict()` or `enchant_broker_request_pwl_dict()`.
- **`$word`** — The word to check
- **`$suggestions`** — If the word is not correctly spelled, this variable will contain an array of suggestions.

## Return Values

Returns `true` if the word is correctly spelled or `false`

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$dictionary` expects an `EnchantDictionary` instance now; previously, a `resource` was expected. |

## Examples

**A `enchant_dict_quick_check()` example**

```php


<?php
$tag = 'en_US';
$r = enchant_broker_init();

if (enchant_broker_dict_exists($r,$tag)) {
    $d = enchant_broker_request_dict($r, $tag);
    enchant_dict_quick_check($d, 'soong', $suggs);
    print_r($suggs);
}
?>

   
```

The above example will output something similar to:

```text


Array
(
    [0] => song
    [1] => snog
    [2] => soon
    [3] => Sang
    [4] => Sung
    [5] => sang
    [6] => sung
    [7] => sponge
    [8] => spongy
    [9] => snag
    [10] => snug
    [11] => sonic
    [12] => sing
    [13] => songs
    [14] => Son
    [15] => Sonja
    [16] => Synge
    [17] => son
    [18] => Sejong
    [19] => sarong
    [20] => sooner
    [21] => Sony
    [22] => sown
    [23] => scone
    [24] => song's
)

   
```

## See Also

 `enchant_dict_check()` `enchant_dict_suggest()`
