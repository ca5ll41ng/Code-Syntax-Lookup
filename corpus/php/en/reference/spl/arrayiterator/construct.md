---
id: "en-php-function-arrayiterator-construct"
language: "php"
lang: "en"
category: "function"
name: "ArrayIterator::__construct"
title: "Construct an ArrayIterator"
signature: "public ArrayIterator::__construct(array|object $array = [], int $flags = 0)"
module: "spl"
source_url: "https://www.php.net/manual/en/arrayiterator.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct an ArrayIterator

## Description

```php
public ArrayIterator::__construct(array|object $array = [], int $flags = 0)
```

Constructs an `ArrayIterator` `object`.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$array`** — The array or object to be iterated on. Passing an `object` is deprecated as of PHP 8.5.0.
- **`$flags`** — Flags to control the behaviour of the `ArrayIterator` object. See `ArrayIterator::setFlags()`.

## Errors/Exceptions

As of PHP 8.5.0, throws an InvalidArgumentException if `$array` is an enum.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | Passing an enum as `$array` now throws an InvalidArgumentException. |
| 8.5.0 | Passing an `object` as `$array` is deprecated. |

## See Also

 `ArrayIterator::getArrayCopy()` `ArrayIterator::setFlags()` `ArrayObject::__construct()`
