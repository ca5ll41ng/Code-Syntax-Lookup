---
id: "en-php-function-recursivecachingiterator-construct"
language: "php"
lang: "en"
category: "function"
name: "RecursiveCachingIterator::__construct"
title: "Construct"
signature: "public RecursiveCachingIterator::__construct(Iterator $iterator, int $flags = RecursiveCachingIterator::CALL_TOSTRING)"
module: "spl"
source_url: "https://www.php.net/manual/en/recursivecachingiterator.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct

## Description

```php
public RecursiveCachingIterator::__construct(Iterator $iterator, int $flags = RecursiveCachingIterator::CALL_TOSTRING)
```

Constructs a new `RecursiveCachingIterator`, which consists of a passed in `$iterator`.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$iterator`** — The iterator being used.
- **`$flags`** — The flags. Use `CALL_TOSTRING` to call `RecursiveCachingIterator::__toString()` for every element (the default), and/or `CATCH_GET_CHILD` to catch exceptions when trying to get children.

## See Also

`CachingIterator::__construct()`
