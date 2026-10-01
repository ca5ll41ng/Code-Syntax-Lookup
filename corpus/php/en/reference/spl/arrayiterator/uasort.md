---
id: "en-php-function-arrayiterator-uasort"
language: "php"
lang: "en"
category: "function"
name: "ArrayIterator::uasort"
title: "Sort with a user-defined comparison function and maintain index association"
signature: "public true ArrayIterator::uasort(callable $callback)"
module: "spl"
source_url: "https://www.php.net/manual/en/arrayiterator.uasort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sort with a user-defined comparison function and maintain index association

## Description

```php
public true ArrayIterator::uasort(callable $callback)
```

This method sorts the elements such that indices maintain their correlation with the values they are associated with, using a user-defined comparison function.

> If two members compare as equal, they retain their original order. Prior to PHP 8.0.0, their relative order in the sorted array was undefined.

## Parameters

- **`$callback`** — The comparison function must return an integer less than, equal to, or greater than zero if the first argument is considered to be respectively less than, equal to, or greater than the second.
  > Returning *non-integer* values from the comparison function, such as `float`, will result in an internal cast to `int` of the callback's return value. So values such as `0.99` and `0.1` will both be cast to an integer value of `0`, which will compare such values as equal.



## Return Values

Always returns `true`.

## Changelog

|  |  |
| --- | --- |
| 8.2.0 | The return type is `true` now; previously, it was `bool`. |

## See Also

`ArrayIterator::asort()` `ArrayIterator::ksort()` `ArrayIterator::natcasesort()` `ArrayIterator::natsort()` `ArrayIterator::uksort()` `uasort()`
