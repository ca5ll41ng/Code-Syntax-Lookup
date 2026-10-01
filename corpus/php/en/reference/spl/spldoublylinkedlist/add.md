---
id: "en-php-function-spldoublylinkedlist-add"
language: "php"
lang: "en"
category: "function"
name: "SplDoublyLinkedList::add"
title: "Add/insert a new value at the specified index"
signature: "public void SplDoublyLinkedList::add(int $index, mixed $value)"
module: "spl"
source_url: "https://www.php.net/manual/en/spldoublylinkedlist.add.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add/insert a new value at the specified index

## Description

```php
public void SplDoublyLinkedList::add(int $index, mixed $value)
```

Insert the value `$value` at the specified `$index`, shuffling the previous value at that index (and all subsequent values) up through the list.

## Parameters

- **`$index`** — The index where the new value is to be inserted.
- **`$value`** — The new value for the `$index`.

## Return Values

No value is returned.

## Errors/Exceptions

Throws `OutOfRangeException` when `$index` is out of bounds or when `$index` cannot be parsed as an integer.
