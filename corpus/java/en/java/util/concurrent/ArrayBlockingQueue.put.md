---
id: "java-en-function-arrayblockingqueue-put"
language: "java"
lang: "en"
category: "function"
name: "ArrayBlockingQueue.put"
signature: "public void put(E e) throws InterruptedException"
title: "ArrayBlockingQueue.put"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ArrayBlockingQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArrayBlockingQueue.put

```java
public void put(E e) throws InterruptedException
```

Inserts the specified element at the tail of this queue, waiting
 for space to become available if the queue is full.

**异常**

- **InterruptedException** — {@inheritDoc}
- **NullPointerException** — {@inheritDoc}
