---
id: "java-en-function-copyonwritearrayset-iterator"
language: "java"
lang: "en"
category: "function"
name: "CopyOnWriteArraySet.iterator"
signature: "public Iterator<E> iterator()"
title: "CopyOnWriteArraySet.iterator"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CopyOnWriteArraySet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CopyOnWriteArraySet.iterator

```java
public Iterator<E> iterator()
```

Returns an iterator over the elements contained in this set
 in the order in which these elements were added.

 

The returned iterator provides a snapshot of the state of the set
 when the iterator was constructed. No synchronization is needed while
 traversing the iterator. The iterator does NOT support the
 `remove` method.

**返回**

- an iterator over the elements in this set
