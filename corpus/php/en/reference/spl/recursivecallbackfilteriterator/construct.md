---
id: "en-php-function-recursivecallbackfilteriterator-construct"
language: "php"
lang: "en"
category: "function"
name: "RecursiveCallbackFilterIterator::__construct"
title: "Create a RecursiveCallbackFilterIterator from a RecursiveIterator"
signature: "public RecursiveCallbackFilterIterator::__construct(RecursiveIterator $iterator, callable $callback)"
module: "spl"
source_url: "https://www.php.net/manual/en/recursivecallbackfilteriterator.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a RecursiveCallbackFilterIterator from a RecursiveIterator

## Description

```php
public RecursiveCallbackFilterIterator::__construct(RecursiveIterator $iterator, callable $callback)
```

Creates a filtered iterator from a RecursiveIterator using the `$callback` to determine which items are accepted or rejected.

## Parameters

- **`$iterator`** — The recursive iterator to be filtered.
- **`$callback`** — The callback, which should return `true` to accept the current item or `false` otherwise. See Examples. — May be any valid `callable` value.

## See Also

RecursiveCallbackFilterIterator Examples `RecursiveCallbackFilterIterator::getChildren()` `RecursiveCallbackFilterIterator::hasChildren()`
