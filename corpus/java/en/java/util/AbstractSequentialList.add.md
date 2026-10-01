---
id: "java-en-function-abstractsequentiallist-add"
language: "java"
lang: "en"
category: "function"
name: "AbstractSequentialList.add"
signature: "public void add(int index, E element)"
title: "AbstractSequentialList.add"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractSequentialList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractSequentialList.add

```java
public void add(int index, E element)
```

Inserts the specified element at the specified position in this list
 (optional operation).  Shifts the element currently at that position
 (if any) and any subsequent elements to the right (adds one to their
 indices).

 

This implementation first gets a list iterator pointing to the
 indexed element (with `listIterator(index)`).  Then, it
 inserts the specified element with `ListIterator.add`.

 

Note that this implementation will throw an
 `UnsupportedOperationException` if the list iterator does not
 implement the `add` operation.

**异常**

- **UnsupportedOperationException** — {@inheritDoc}
- **ClassCastException** — {@inheritDoc}
- **NullPointerException** — {@inheritDoc}
- **IllegalArgumentException** — {@inheritDoc}
- **IndexOutOfBoundsException** — {@inheritDoc}
