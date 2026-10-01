---
id: "en-php-function-arrayobject-ksort"
language: "php"
lang: "en"
category: "function"
name: "ArrayObject::ksort"
title: "Sort the entries by key"
signature: "public true ArrayObject::ksort(int $flags = SORT_REGULAR)"
module: "spl"
source_url: "https://www.php.net/manual/en/arrayobject.ksort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sort the entries by key

## Description

```php
public true ArrayObject::ksort(int $flags = SORT_REGULAR)
```

Sorts the entries by key, maintaining key to entry correlations. This is useful mainly for associative arrays.

> If two members compare as equal, they retain their original order. Prior to PHP 8.0.0, their relative order in the sorted array was undefined.

## Parameters

- **`$flags`** — The optional second parameter `$flags` may be used to modify the sorting behavior using these values: — Sorting type flags: - `SORT_REGULAR` - compare items normally; the details are described in the comparison operators section - `SORT_NUMERIC` - compare items numerically - `SORT_STRING` - compare items as strings - `SORT_LOCALE_STRING` - compare items as strings, based on the current locale. It uses the locale, which can be changed using `setlocale()` - `SORT_NATURAL` - compare items as strings using "natural ordering" like `natsort()` - `SORT_FLAG_CASE` - can be combined (bitwise OR) with `SORT_STRING` or `SORT_NATURAL` to sort strings case-insensitively

## Return Values

Always returns `true`.

## Changelog

|  |  |
| --- | --- |
| 8.2.0 | The return type is `true` now; previously, it was `bool`. |

## Examples

**`ArrayObject::ksort()` example**

```php


<?php
$fruits = array("d" => "lemon", "a" => "orange", "b" => "banana", "c" => "apple");
$fruitArrayObject = new ArrayObject($fruits);
$fruitArrayObject->ksort();

foreach ($fruitArrayObject as $key => $val) {
    echo "$key = $val\n";
}
 ?>

    
```

The above example will output:

```text


a = orange
b = banana
c = apple
d = lemon

    
```

## See Also

`ArrayObject::asort()` `ArrayObject::natsort()` `ArrayObject::natcasesort()` `ArrayObject::uasort()` `ArrayObject::uksort()` `ksort()`
