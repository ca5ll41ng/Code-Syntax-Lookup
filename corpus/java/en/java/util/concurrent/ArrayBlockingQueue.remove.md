---
id: "java-en-function-arrayblockingqueue-remove"
language: "java"
lang: "en"
category: "function"
name: "ArrayBlockingQueue.remove"
signature: "public boolean remove(Object o)"
title: "ArrayBlockingQueue.remove"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ArrayBlockingQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArrayBlockingQueue.remove

```java
public boolean remove(Object o)
```

Removes a single instance of the specified element from this queue,
 if it is present.  More formally, removes an element `e` such
 that `o.equals(e)`, if this queue contains one or more such
 elements.
 Returns `true` if this queue contained the specified element
 (or equivalently, if this queue changed as a result of the call).

 

Removal of interior elements in circular array based queues
 is an intrinsically slow and disruptive operation, so should
 be undertaken only in exceptional circumstances, ideally
 only when the queue is known not to be accessible by other
 threads.

**参数**

- **o** — element to be removed from this queue, if present

**返回**

- `true` if this queue changed as a result of the call
