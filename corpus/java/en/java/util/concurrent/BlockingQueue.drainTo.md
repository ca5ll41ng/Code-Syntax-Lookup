---
id: "java-en-function-blockingqueue-drainto"
language: "java"
lang: "en"
category: "function"
name: "BlockingQueue.drainTo"
signature: "int drainTo(Collection<? super E> c)"
title: "BlockingQueue.drainTo"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/BlockingQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BlockingQueue.drainTo

```java
int drainTo(Collection<? super E> c)
```

Removes all available elements from this queue and adds them
 to the given collection.  This operation may be more
 efficient than repeatedly polling this queue.  A failure
 encountered while attempting to add elements to
 collection `c` may result in elements being in neither,
 either or both collections when the associated exception is
 thrown.  Attempts to drain a queue to itself result in
 `IllegalArgumentException`. Further, the behavior of
 this operation is undefined if the specified collection is
 modified while the operation is in progress.

**参数**

- **c** — the collection to transfer elements into

**返回**

- the number of elements transferred

**异常**

- **UnsupportedOperationException** — if addition of elements is not supported by the specified collection
- **ClassCastException** — if the class of an element of this queue prevents it from being added to the specified collection
- **NullPointerException** — if the specified collection is null
- **IllegalArgumentException** — if the specified collection is this queue, or some property of an element of this queue prevents it from being added to the specified collection
