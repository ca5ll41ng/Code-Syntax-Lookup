---
id: "en-php-function-iteratoriterator-construct"
language: "php"
lang: "en"
category: "function"
name: "IteratorIterator::__construct"
title: "Create an iterator from anything that is traversable"
signature: "public IteratorIterator::__construct(Traversable $iterator, string|null $class = null)"
module: "spl"
source_url: "https://www.php.net/manual/en/iteratoriterator.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create an iterator from anything that is traversable

## Description

```php
public IteratorIterator::__construct(Traversable $iterator, string|null $class = null)
```

Creates an iterator from anything that is traversable.

## Parameters

- **`$iterator`** — The traversable iterator.
- **`$class`** — The class name to use for the inner iterator. It allows to specify a different iterator class to wrap the provided iterator. By default, it will use the IteratorIterator class itself.

## See Also

`Traversable`
