---
id: "java-en-function-listiterator-add"
language: "java"
lang: "en"
category: "function"
name: "ListIterator.add"
signature: "void add(E e)"
title: "ListIterator.add"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ListIterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ListIterator.add

```java
void add(E e)
```

Inserts the specified element into the list (optional operation).
 The element is inserted immediately before the element that
 would be returned by `next`, if any, and after the element
 that would be returned by `previous`, if any.  (If the
 list contains no elements, the new element becomes the sole element
 on the list.)  The new element is inserted before the implicit
 cursor: a subsequent call to `next` would be unaffected, and a
 subsequent call to `previous` would return the new element.
 (This call increases by one the value that would be returned by a
 call to `nextIndex` or `previousIndex`.)

**参数**

- **e** — the element to insert

**异常**

- **UnsupportedOperationException** — if the `add` method is not supported by this list iterator
- **ClassCastException** — if the class of the specified element prevents it from being added to this list
- **IllegalArgumentException** — if some aspect of this element prevents it from being added to this list
