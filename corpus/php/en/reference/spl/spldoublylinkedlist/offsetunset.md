---
id: "en-php-function-spldoublylinkedlist-offsetunset"
language: "php"
lang: "en"
category: "function"
name: "SplDoublyLinkedList::offsetUnset"
title: "Unsets the value at the specified $index"
signature: "public void SplDoublyLinkedList::offsetUnset(int $index)"
module: "spl"
source_url: "https://www.php.net/manual/en/spldoublylinkedlist.offsetunset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Unsets the value at the specified $index

## Description

```php
public void SplDoublyLinkedList::offsetUnset(int $index)
```

Unsets the value at the specified index.

## Parameters

- **`$index`** — The index being unset.

## Return Values

No value is returned.

## Errors/Exceptions

Throws `OutOfRangeException` when `$index` is out of bounds or when `$index` cannot be parsed as an integer.
