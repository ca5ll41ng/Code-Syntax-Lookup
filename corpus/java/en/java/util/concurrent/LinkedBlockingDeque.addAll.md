---
id: "java-en-function-linkedblockingdeque-addall"
language: "java"
lang: "en"
category: "function"
name: "LinkedBlockingDeque.addAll"
signature: "public boolean addAll(Collection<? extends E> c)"
title: "LinkedBlockingDeque.addAll"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/LinkedBlockingDeque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LinkedBlockingDeque.addAll

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
- **IllegalStateException** — if this deque is full

**参见**

- #add(Object)
