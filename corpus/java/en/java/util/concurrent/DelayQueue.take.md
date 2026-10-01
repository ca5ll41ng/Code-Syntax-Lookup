---
id: "java-en-function-delayqueue-take"
language: "java"
lang: "en"
category: "function"
name: "DelayQueue.take"
signature: "public E take() throws InterruptedException"
title: "DelayQueue.take"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/DelayQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DelayQueue.take

```java
public E take() throws InterruptedException
```

Retrieves and removes the expired head of
 this queue, waiting if necessary until an
 expired element is available on this queue.

**返回**

- the expired head of this queue

**异常**

- **InterruptedException** — {@inheritDoc}
