---
id: "en-php-function-function-enchant-dict-suggest"
language: "php"
lang: "en"
category: "function"
name: "enchant_dict_suggest"
title: "Suggest spellings for a word"
signature: "array enchant_dict_suggest(EnchantDictionary $dictionary, string $word)"
module: "enchant"
source_url: "https://www.php.net/manual/en/function.enchant-dict-suggest.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Suggest spellings for a word

## Description

```php
array enchant_dict_suggest(EnchantDictionary $dictionary, string $word)
```

## Parameters

- **`$dictionary`** — An Enchant dictionary returned by `enchant_broker_request_dict()` or `enchant_broker_request_pwl_dict()`.
- **`$word`** — Word to use for the suggestions.

## Return Values

Will returns an array of suggestions if the word is bad spelled.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$dictionary` expects an `EnchantDictionary` instance now; previously, a `resource` was expected. |

## Examples

**A `enchant_dict_suggest()` example**

```php


<?php
$tag = 'en_US';
$r = enchant_broker_init();
if (enchant_broker_dict_exists($r,$tag)) {
    $d = enchant_broker_request_dict($r, $tag);

    $wordcorrect = enchant_dict_check($d, "soong");
    if (!$wordcorrect) {
        $suggs = enchant_dict_suggest($d, "soong");
        echo "Suggestions for 'soong':";
        print_r($suggs);
    }
}
?>

   
```

## See Also

 `enchant_dict_check()` `enchant_dict_quick_check()`
