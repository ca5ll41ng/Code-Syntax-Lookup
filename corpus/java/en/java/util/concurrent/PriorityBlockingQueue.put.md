---
id: "java-en-function-priorityblockingqueue-put"
language: "java"
lang: "en"
category: "function"
name: "PriorityBlockingQueue.put"
signature: "public void put(E e)"
title: "PriorityBlockingQueue.put"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/PriorityBlockingQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PriorityBlockingQueue.put

```java
public void put(E e)
```

Inserts the specified element into this priority queue.
 As the queue is unbounded, this method will never block.

**参数**

- **e** — the element to add

**异常**

- **ClassCastException** — if the specified element cannot be compared with elements currently in the priority queue according to the priority queue's ordering
- **NullPointerException** — if the specified element is null
