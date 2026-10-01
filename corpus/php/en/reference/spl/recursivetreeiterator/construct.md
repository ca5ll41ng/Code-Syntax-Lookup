---
id: "en-php-function-recursivetreeiterator-construct"
language: "php"
lang: "en"
category: "function"
name: "RecursiveTreeIterator::__construct"
title: "Construct a RecursiveTreeIterator"
signature: "public RecursiveTreeIterator::__construct(RecursiveIterator|IteratorAggregate $iterator, int $flags = RecursiveTreeIterator::BYPASS_KEY, int $cachingIteratorFlags = CachingIterator::CATCH_GET_CHILD, int $mode = RecursiveTreeIterator::SELF_FIRST)"
module: "spl"
source_url: "https://www.php.net/manual/en/recursivetreeiterator.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a RecursiveTreeIterator

## Description

```php
public RecursiveTreeIterator::__construct(RecursiveIterator|IteratorAggregate $iterator, int $flags = RecursiveTreeIterator::BYPASS_KEY, int $cachingIteratorFlags = CachingIterator::CATCH_GET_CHILD, int $mode = RecursiveTreeIterator::SELF_FIRST)
```

Constructs a new `RecursiveTreeIterator` from the supplied recursive iterator.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$iterator`** — The `RecursiveIterator` or `IteratorAggregate` to iterate over.
- **`$flags`** — Flags may be provided which will affect the behavior of some methods. A list of the flags can found under RecursiveTreeIterator predefined constants.
- **`$caching_it_flags`** — Flags to affect the behavior of the `RecursiveCachingIterator` used internally.
- **`$mode`** — Flags to affect the behavior of the `RecursiveIteratorIterator` used internally.
