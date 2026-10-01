---
id: "en-php-function-function-enchant-dict-add"
language: "php"
lang: "en"
category: "function"
name: "enchant_dict_add"
title: "Add a word to personal word list"
signature: "void enchant_dict_add(EnchantDictionary $dictionary, string $word)"
module: "enchant"
source_url: "https://www.php.net/manual/en/function.enchant-dict-add.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add a word to personal word list

## Description

```php
void enchant_dict_add(EnchantDictionary $dictionary, string $word)
```

Add a word to personal word list of the given dictionary.

## Parameters

- **`$dictionary`** — An Enchant dictionary returned by `enchant_broker_request_dict()` or `enchant_broker_request_pwl_dict()`.
- **`$word`** — The word to add

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$dictionary` expects an `EnchantDictionary` instance now; previously, a `resource` was expected. |

## Examples

**Adding a word to a PWL**

```php


<?php

$filename = './my_word_list.pwl';
$word = 'Supercalifragilisticexpialidocious';

$broker = enchant_broker_init();
$dict = enchant_broker_request_pwl_dict($broker, $filename);

enchant_dict_add($dict, $word);

?>

   
```

## See Also

 `enchant_broker_request_pwl_dict()` `enchant_broker_request_dict()`
