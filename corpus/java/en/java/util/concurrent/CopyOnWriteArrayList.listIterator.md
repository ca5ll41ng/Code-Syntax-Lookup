---
id: "java-en-function-copyonwritearraylist-listiterator"
language: "java"
lang: "en"
category: "function"
name: "CopyOnWriteArrayList.listIterator"
signature: "public ListIterator<E> listIterator()"
title: "CopyOnWriteArrayList.listIterator"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CopyOnWriteArrayList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CopyOnWriteArrayList.listIterator

```java
public ListIterator<E> listIterator()
```

{@inheritDoc}

 

The returned iterator provides a snapshot of the state of the list
 when the iterator was constructed. No synchronization is needed while
 traversing the iterator. The iterator does NOT support the
 `remove`, `set` or `add` methods.
