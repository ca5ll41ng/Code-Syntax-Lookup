---
id: "java-en-function-abstractsequentiallist-set"
language: "java"
lang: "en"
category: "function"
name: "AbstractSequentialList.set"
signature: "public E set(int index, E element)"
title: "AbstractSequentialList.set"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractSequentialList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractSequentialList.set

```java
public E set(int index, E element)
```

Replaces the element at the specified position in this list with the
 specified element (optional operation).

 

This implementation first gets a list iterator pointing to the
 indexed element (with `listIterator(index)`).  Then, it gets
 the current element using `ListIterator.next` and replaces it
 with `ListIterator.set`.

 

Note that this implementation will throw an
 `UnsupportedOperationException` if the list iterator does not
 implement the `set` operation.

**异常**

- **UnsupportedOperationException** — {@inheritDoc}
- **ClassCastException** — {@inheritDoc}
- **NullPointerException** — {@inheritDoc}
- **IllegalArgumentException** — {@inheritDoc}
- **IndexOutOfBoundsException** — {@inheritDoc}
