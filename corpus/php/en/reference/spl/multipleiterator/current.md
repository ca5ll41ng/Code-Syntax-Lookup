---
id: "en-php-function-multipleiterator-current"
language: "php"
lang: "en"
category: "function"
name: "MultipleIterator::current"
title: "Gets the registered iterator instances"
signature: "public array MultipleIterator::current()"
module: "spl"
source_url: "https://www.php.net/manual/en/multipleiterator.current.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the registered iterator instances

## Description

```php
public array MultipleIterator::current()
```

Get the registered iterator instances current() result.

> This function is currently not documented; only its argument list is available.

## Parameters

This function has no parameters.

## Return Values

An `array` containing the current values of each attached iterator.

## Errors/Exceptions

A `RuntimeException` if the iterator is invalid (as of PHP 8.1.0), or mode `MIT_NEED_ALL` is set and at least one attached iterator is not valid. Or an `IllegalValueException` if a key is `null` and `MIT_KEYS_ASSOC` is set.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | A `RuntimeException` is now thrown if `MultipleIterator::current()` is called on an invalid iterator. Previously, `false` was returned. |

## See Also

`MultipleIterator::valid()`
