---
id: "java-en-function-concurrentlinkedqueue-offer"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentLinkedQueue.offer"
signature: "public boolean offer(E e)"
title: "ConcurrentLinkedQueue.offer"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentLinkedQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentLinkedQueue.offer

```java
public boolean offer(E e)
```

Inserts the specified element at the tail of this queue.
 As the queue is unbounded, this method will never return `false`.

**返回**

- `true` (as specified by `offer`)

**异常**

- **NullPointerException** — if the specified element is null
