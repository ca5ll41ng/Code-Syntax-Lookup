---
id: "en-php-function-spldoublylinkedlist-setiteratormode"
language: "php"
lang: "en"
category: "function"
name: "SplDoublyLinkedList::setIteratorMode"
title: "Sets the mode of iteration"
signature: "public int SplDoublyLinkedList::setIteratorMode(int $mode)"
module: "spl"
source_url: "https://www.php.net/manual/en/spldoublylinkedlist.setiteratormode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the mode of iteration

## Description

```php
public int SplDoublyLinkedList::setIteratorMode(int $mode)
```

## Parameters

- **`$mode`** — There are two orthogonal sets of modes that can be set:
  - The direction of the iteration (either one or the other): - `SplDoublyLinkedList::IT_MODE_LIFO` (Stack style) - `SplDoublyLinkedList::IT_MODE_FIFO` (Queue style)
  - The behavior of the iterator (either one or the other): - `SplDoublyLinkedList::IT_MODE_DELETE` (Elements are deleted by the iterator) - `SplDoublyLinkedList::IT_MODE_KEEP` (Elements are traversed by the iterator)

 — The default mode is: `SplDoublyLinkedList::IT_MODE_FIFO` | `SplDoublyLinkedList::IT_MODE_KEEP`
  > The direction of iteration can not be changed for `SplStack` and `SplQueue` classes, it is always `SplDoublyLinkedList::IT_MODE_FIFO`. Trying to modify it will result in a `RuntimeException` being thrown.



## Return Values

Returns the different modes and flags that affect the iteration.
