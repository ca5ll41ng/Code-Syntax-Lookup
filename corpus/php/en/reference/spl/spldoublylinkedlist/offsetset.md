---
id: "en-php-function-spldoublylinkedlist-offsetset"
language: "php"
lang: "en"
category: "function"
name: "SplDoublyLinkedList::offsetSet"
title: "Sets the value at the specified $index to $value"
signature: "public void SplDoublyLinkedList::offsetSet(int|null $index, mixed $value)"
module: "spl"
source_url: "https://www.php.net/manual/en/spldoublylinkedlist.offsetset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the value at the specified $index to $value

## Description

```php
public void SplDoublyLinkedList::offsetSet(int|null $index, mixed $value)
```

Sets the value at the specified `$index` to `$value`.

## Parameters

- **`$index`** — The index being set. If `null`, the next value will be added after the last item.
- **`$value`** — The new value for the `$index`.

## Return Values

No value is returned.

## Errors/Exceptions

Throws `OutOfRangeException` when `$index` is out of bounds or when `$index` cannot be parsed as an integer.
