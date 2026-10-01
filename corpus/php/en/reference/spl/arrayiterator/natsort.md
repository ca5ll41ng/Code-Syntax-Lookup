---
id: "en-php-function-arrayiterator-natsort"
language: "php"
lang: "en"
category: "function"
name: "ArrayIterator::natsort"
title: "Sort entries naturally"
signature: "public true ArrayIterator::natsort()"
module: "spl"
source_url: "https://www.php.net/manual/en/arrayiterator.natsort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sort entries naturally

## Description

```php
public true ArrayIterator::natsort()
```

Sort the entries by values using a "natural order" algorithm.

> If two members compare as equal, they retain their original order. Prior to PHP 8.0.0, their relative order in the sorted array was undefined.

## Parameters

This function has no parameters.

## Return Values

Always returns `true`.

## Changelog

|  |  |
| --- | --- |
| 8.2.0 | The return type is `true` now; previously, it was `bool`. |

## See Also

`ArrayIterator::asort()` `ArrayIterator::ksort()` `ArrayIterator::natcasesort()` `ArrayIterator::uasort()` `ArrayIterator::uksort()` `natsort()`
