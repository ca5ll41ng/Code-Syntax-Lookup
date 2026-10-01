---
id: "en-php-function-callbackfilteriterator-construct"
language: "php"
lang: "en"
category: "function"
name: "CallbackFilterIterator::__construct"
title: "Create a filtered iterator from another iterator"
signature: "public CallbackFilterIterator::__construct(Iterator $iterator, callable $callback)"
module: "spl"
source_url: "https://www.php.net/manual/en/callbackfilteriterator.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a filtered iterator from another iterator

## Description

```php
public CallbackFilterIterator::__construct(Iterator $iterator, callable $callback)
```

Creates a filtered iterator using the `$callback` to determine which items are accepted or rejected.

## Parameters

- **`$iterator`** — The iterator to be filtered.
- **`$callback`** — The callback, which should return `true` to accept the current item or `false` otherwise. See Examples. — May be any valid `callable` value.

## See Also

CallbackFilterIterator Examples `CallbackFilterIterator::accept()`
