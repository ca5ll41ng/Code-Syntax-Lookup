---
id: "en-php-function-limititerator-seek"
language: "php"
lang: "en"
category: "function"
name: "LimitIterator::seek"
title: "Seek to the given position"
signature: "public int LimitIterator::seek(int $offset)"
module: "spl"
source_url: "https://www.php.net/manual/en/limititerator.seek.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Seek to the given position

## Description

```php
public int LimitIterator::seek(int $offset)
```

Moves the iterator to the offset specified by `$offset`.

## Parameters

- **`$offset`** — The position to seek to.

## Return Values

Returns the offset position after seeking.

## Errors/Exceptions

Throws an `OutOfBoundsException` if the position is outside of the limits specified in `LimitIterator::__construct()`.

## See Also

`LimitIterator::current()` `LimitIterator::key()` `LimitIterator::rewind()` `LimitIterator::next()` `LimitIterator::valid()`
