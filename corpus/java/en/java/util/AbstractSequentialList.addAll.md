---
id: "java-en-function-abstractsequentiallist-addall"
language: "java"
lang: "en"
category: "function"
name: "AbstractSequentialList.addAll"
signature: "public boolean addAll(int index, Collection<? extends E> c)"
title: "AbstractSequentialList.addAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractSequentialList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractSequentialList.addAll

```java
public boolean addAll(int index, Collection<? extends E> c)
```

Inserts all of the elements in the specified collection into this
 list at the specified position (optional operation).  Shifts the
 element currently at that position (if any) and any subsequent
 elements to the right (increases their indices).  The new elements
 will appear in this list in the order that they are returned by the
 specified collection's iterator.  The behavior of this operation is
 undefined if the specified collection is modified while the
 operation is in progress.  (Note that this will occur if the specified
 collection is this list, and it's nonempty.)

 

This implementation gets an iterator over the specified collection and
 a list iterator over this list pointing to the indexed element (with
 `listIterator(index)`).  Then, it iterates over the specified
 collection, inserting the elements obtained from the iterator into this
 list, one at a time, using `ListIterator.add` followed by
 `ListIterator.next` (to skip over the added element).

 

Note that this implementation will throw an
 `UnsupportedOperationException` if the list iterator returned by
 the `listIterator` method does not implement the `add`
 operation.

**异常**

- **UnsupportedOperationException** — {@inheritDoc}
- **ClassCastException** — {@inheritDoc}
- **NullPointerException** — {@inheritDoc}
- **IllegalArgumentException** — {@inheritDoc}
- **IndexOutOfBoundsException** — {@inheritDoc}
