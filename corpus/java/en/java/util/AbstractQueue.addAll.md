---
id: "java-en-function-abstractqueue-addall"
language: "java"
lang: "en"
category: "function"
name: "AbstractQueue.addAll"
signature: "public boolean addAll(Collection<? extends E> c)"
title: "AbstractQueue.addAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueue.addAll

```java
public boolean addAll(Collection<? extends E> c)
```

Adds all of the elements in the specified collection to this
 queue.  Attempts to addAll of a queue to itself result in
 `IllegalArgumentException`. Further, the behavior of
 this operation is undefined if the specified collection is
 modified while the operation is in progress.

 

This implementation iterates over the specified collection,
 and adds each element returned by the iterator to this
 queue, in turn.  A runtime exception encountered while
 trying to add an element (including, in particular, a
 `null` element) may result in only some of the elements
 having been successfully added when the associated exception is
 thrown.

**参数**

- **c** — collection containing elements to be added to this queue

**返回**

- `true` if this queue changed as a result of the call

**异常**

- **ClassCastException** — if the class of an element of the specified collection prevents it from being added to this queue
- **NullPointerException** — if the specified collection contains a null element and this queue does not permit null elements, or if the specified collection is null
- **IllegalArgumentException** — if some property of an element of the specified collection prevents it from being added to this queue, or if the specified collection is this queue
- **IllegalStateException** — if not all the elements can be added at this time due to insertion restrictions

**参见**

- #add(Object)
