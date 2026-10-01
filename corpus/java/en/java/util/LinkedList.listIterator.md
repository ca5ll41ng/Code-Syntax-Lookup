---
id: "java-en-function-linkedlist-listiterator"
language: "java"
lang: "en"
category: "function"
name: "LinkedList.listIterator"
signature: "public ListIterator<E> listIterator(int index)"
title: "LinkedList.listIterator"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/LinkedList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LinkedList.listIterator

```java
public ListIterator<E> listIterator(int index)
```

Returns a list-iterator of the elements in this list (in proper
 sequence), starting at the specified position in the list.
 Obeys the general contract of `List.listIterator(int)`.

 The list-iterator is fail-fast: if the list is structurally
 modified at any time after the Iterator is created, in any way except
 through the list-iterator's own `remove` or `add`
 methods, the list-iterator will throw a
 `ConcurrentModificationException`.  Thus, in the face of
 concurrent modification, the iterator fails quickly and cleanly, rather
 than risking arbitrary, non-deterministic behavior at an undetermined
 time in the future.

**参数**

- **index** — index of the first element to be returned from the list-iterator (by a call to `next`)

**返回**

- a ListIterator of the elements in this list (in proper sequence), starting at the specified position in the list

**异常**

- **IndexOutOfBoundsException** — {@inheritDoc}

**参见**

- List#listIterator(int)
