---
id: "java-en-function-blockingqueue-put"
language: "java"
lang: "en"
category: "function"
name: "BlockingQueue.put"
signature: "void put(E e) throws InterruptedException"
title: "BlockingQueue.put"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/BlockingQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BlockingQueue.put

```java
void put(E e) throws InterruptedException
```

Inserts the specified element into this queue, waiting if necessary
 for space to become available.

**参数**

- **e** — the element to add

**异常**

- **InterruptedException** — if interrupted while waiting
- **ClassCastException** — if the class of the specified element prevents it from being added to this queue
- **NullPointerException** — if the specified element is null
- **IllegalArgumentException** — if some property of the specified element prevents it from being added to this queue
