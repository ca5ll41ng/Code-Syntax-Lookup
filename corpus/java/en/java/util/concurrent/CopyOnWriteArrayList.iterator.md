---
id: "java-en-function-copyonwritearraylist-iterator"
language: "java"
lang: "en"
category: "function"
name: "CopyOnWriteArrayList.iterator"
signature: "public Iterator<E> iterator()"
title: "CopyOnWriteArrayList.iterator"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CopyOnWriteArrayList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CopyOnWriteArrayList.iterator

```java
public Iterator<E> iterator()
```

Returns an iterator over the elements in this list in proper sequence.

 

The returned iterator provides a snapshot of the state of the list
 when the iterator was constructed. No synchronization is needed while
 traversing the iterator. The iterator does NOT support the
 `remove` method.

**返回**

- an iterator over the elements in this list in proper sequence
