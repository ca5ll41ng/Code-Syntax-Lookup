---
id: "java-en-function-arraylist-listiterator"
language: "java"
lang: "en"
category: "function"
name: "ArrayList.listIterator"
signature: "public ListIterator<E> listIterator(int index)"
title: "ArrayList.listIterator"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ArrayList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArrayList.listIterator

```java
public ListIterator<E> listIterator(int index)
```

Returns a list iterator over the elements in this list (in proper
 sequence), starting at the specified position in the list.
 The specified index indicates the first element that would be
 returned by an initial call to `next next`.
 An initial call to `previous previous` would
 return the element with the specified index minus one.

 

The returned list iterator is fail-fast.

**异常**

- **IndexOutOfBoundsException** — {@inheritDoc}
