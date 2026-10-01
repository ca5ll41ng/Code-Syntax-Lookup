---
id: "en-php-function-spldoublylinkedlist-offsetget"
language: "php"
lang: "en"
category: "function"
name: "SplDoublyLinkedList::offsetGet"
title: "Returns the value at the specified $index"
signature: "public mixed SplDoublyLinkedList::offsetGet(int $index)"
module: "spl"
source_url: "https://www.php.net/manual/en/spldoublylinkedlist.offsetget.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the value at the specified $index

## Description

```php
public mixed SplDoublyLinkedList::offsetGet(int $index)
```

## Parameters

- **`$index`** — The index with the value.

## Return Values

The value at the specified `$index`.

## Errors/Exceptions

Throws `OutOfRangeException` when `$index` is out of bounds or when `$index` cannot be parsed as an integer.
