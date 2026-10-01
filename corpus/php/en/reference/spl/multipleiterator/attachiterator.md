---
id: "en-php-function-multipleiterator-attachiterator"
language: "php"
lang: "en"
category: "function"
name: "MultipleIterator::attachIterator"
title: "Attaches iterator information"
signature: "public void MultipleIterator::attachIterator(Iterator $iterator, string|int|null $info = null)"
module: "spl"
source_url: "https://www.php.net/manual/en/multipleiterator.attachiterator.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Attaches iterator information

## Description

```php
public void MultipleIterator::attachIterator(Iterator $iterator, string|int|null $info = null)
```

Attaches iterator information.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$iterator`** — The new iterator to attach.
- **`$info`** — The associative information for the Iterator, which must be an `int`, a `string`, or `null`.

## Return Values

Description...

## Errors/Exceptions

An `IllegalValueException` if the `$iterator` parameter is invalid, or if `$info` is already associated information.

## See Also

`MultipleIterator::__construct()`
