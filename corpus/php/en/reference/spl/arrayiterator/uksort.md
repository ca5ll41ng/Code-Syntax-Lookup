---
id: "en-php-function-arrayiterator-uksort"
language: "php"
lang: "en"
category: "function"
name: "ArrayIterator::uksort"
title: "Sort by keys using a user-defined comparison function"
signature: "public true ArrayIterator::uksort(callable $callback)"
module: "spl"
source_url: "https://www.php.net/manual/en/arrayiterator.uksort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sort by keys using a user-defined comparison function

## Description

```php
public true ArrayIterator::uksort(callable $callback)
```

This method sorts the elements by keys using a user-supplied comparison function.

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

`ArrayIterator::asort()` `ArrayIterator::ksort()` `ArrayIterator::natcasesort()` `ArrayIterator::natsort()` `ArrayIterator::uasort()` `uksort()`
