---
id: "java-en-function-blockingqueue-take"
language: "java"
lang: "en"
category: "function"
name: "BlockingQueue.take"
signature: "E take() throws InterruptedException"
title: "BlockingQueue.take"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/BlockingQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BlockingQueue.take

```java
E take() throws InterruptedException
```

Retrieves and removes the head of this queue, waiting if necessary
 until an element becomes available.

**返回**

- the head of this queue

**异常**

- **InterruptedException** — if interrupted while waiting
