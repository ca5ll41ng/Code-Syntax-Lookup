---
id: "en-php-function-arrayiterator-seek"
language: "php"
lang: "en"
category: "function"
name: "ArrayIterator::seek"
title: "Seeks to a position"
signature: "public void ArrayIterator::seek(int $offset)"
module: "spl"
source_url: "https://www.php.net/manual/en/arrayiterator.seek.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Seeks to a position

## Description

```php
public void ArrayIterator::seek(int $offset)
```

Seeks to a given position in the iterator.

## Parameters

- **`$offset`** — The position to seek to.

## Return Values

No value is returned.

## Errors/Exceptions

Throws an `OutOfBoundsException` if the `$offset` is not seekable.
