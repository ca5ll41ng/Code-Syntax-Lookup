---
id: "en-php-function-infiniteiterator-next"
language: "php"
lang: "en"
category: "function"
name: "InfiniteIterator::next"
title: "Moves the inner Iterator forward or rewinds it"
signature: "public void InfiniteIterator::next()"
module: "spl"
source_url: "https://www.php.net/manual/en/infiniteiterator.next.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Moves the inner Iterator forward or rewinds it

## Description

```php
public void InfiniteIterator::next()
```

Moves the inner `Iterator` forward to its next element if there is one, otherwise rewinds the inner `Iterator` back to the beginning.

> Even an `InfiniteIterator` stops if its inner `Iterator` is empty.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## See Also

`InfiniteIterator::__construct()`
