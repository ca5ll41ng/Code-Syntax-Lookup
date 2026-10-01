---
id: "en-php-function-multipleiterator-key"
language: "php"
lang: "en"
category: "function"
name: "MultipleIterator::key"
title: "Gets the registered iterator instances"
signature: "public array MultipleIterator::key()"
module: "spl"
source_url: "https://www.php.net/manual/en/multipleiterator.key.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the registered iterator instances

## Description

```php
public array MultipleIterator::key()
```

Get the registered iterator instances key() result.

> This function is currently not documented; only its argument list is available.

## Parameters

This function has no parameters.

## Return Values

An `array` of all registered iterator instances.

## Errors/Exceptions

A `RuntimeException` if the iterator is invalid (as of PHP 8.1.0), or mode `MIT_NEED_ALL` is set, and at least one attached iterator is not valid.

Calling this method from `control-structures.foreach` triggers warning "Illegal type returned".

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | A `RuntimeException` is now thrown if `MultipleIterator::key()` is called on an invalid iterator. Previously, `false` was returned. |

## See Also

`MultipleIterator::current()`
