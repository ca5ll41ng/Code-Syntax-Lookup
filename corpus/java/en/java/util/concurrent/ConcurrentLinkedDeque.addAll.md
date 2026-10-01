---
id: "java-en-function-concurrentlinkeddeque-addall"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentLinkedDeque.addAll"
signature: "public boolean addAll(Collection<? extends E> c)"
title: "ConcurrentLinkedDeque.addAll"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentLinkedDeque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentLinkedDeque.addAll

```java
public boolean addAll(Collection<? extends E> c)
```

Appends all of the elements in the specified collection to the end of
 this deque, in the order that they are returned by the specified
 collection's iterator.  Attempts to `addAll` of a deque to
 itself result in `IllegalArgumentException`.

**参数**

- **c** — the elements to be inserted into this deque

**返回**

- `true` if this deque changed as a result of the call

**异常**

- **NullPointerException** — if the specified collection or any of its elements are null
- **IllegalArgumentException** — if the collection is this deque
