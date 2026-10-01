---
id: "java-en-function-concurrentlinkedqueue-size"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentLinkedQueue.size"
signature: "public int size()"
title: "ConcurrentLinkedQueue.size"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentLinkedQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentLinkedQueue.size

```java
public int size()
```

Returns the number of elements in this queue.  If this queue
 contains more than `Integer.MAX_VALUE` elements, returns
 `Integer.MAX_VALUE`.

 

Beware that, unlike in most collections, this method is
 NOT a constant-time operation. Because of the
 asynchronous nature of these queues, determining the current
 number of elements requires an O(n) traversal.
 Additionally, if elements are added or removed during execution
 of this method, the returned result may be inaccurate.  Thus,
 this method is typically not very useful in concurrent
 applications.

**返回**

- the number of elements in this queue
