---
id: "en-php-function-splfixedarray-setsize"
language: "php"
lang: "en"
category: "function"
name: "SplFixedArray::setSize"
title: "Change the size of an array"
signature: "public true SplFixedArray::setSize(int $size)"
module: "spl"
source_url: "https://www.php.net/manual/en/splfixedarray.setsize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Change the size of an array

## Description

```php
public true SplFixedArray::setSize(int $size)
```

Change the size of an array to the new size of `$size`. If `$size` is less than the current array size, any values after the new size will be discarded. If `$size` is greater than the current array size, the array will be padded with `null` values.

## Parameters

- **`$size`** — The new array size. This should be a value between `0` and `PHP_INT_MAX`.

## Return Values

Always returns `true`.

## Errors/Exceptions

Throws ValueError when `$size` is less than zero.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `SplFixedArray::setSize()` now has a tentative return of `true`. |

## Examples

**`SplFixedArray::setSize()` example**

```php


<?php
   $array = new SplFixedArray(5);
   echo $array->getSize()."\n";
   $array->setSize(10);
   echo $array->getSize()."\n";
?>

    
```

The above example will output:

```text


5
10

    
```
