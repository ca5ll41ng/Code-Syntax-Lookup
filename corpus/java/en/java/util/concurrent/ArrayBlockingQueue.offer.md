---
id: "java-en-function-arrayblockingqueue-offer"
language: "java"
lang: "en"
category: "function"
name: "ArrayBlockingQueue.offer"
signature: "public boolean offer(E e)"
title: "ArrayBlockingQueue.offer"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ArrayBlockingQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArrayBlockingQueue.offer

```java
public boolean offer(E e)
```

Inserts the specified element at the tail of this queue if it is
 possible to do so immediately without exceeding the queue's capacity,
 returning `true` upon success and `false` if this queue
 is full.  This method is generally preferable to method `add`,
 which can fail to insert an element only by throwing an exception.

**异常**

- **NullPointerException** — if the specified element is null
