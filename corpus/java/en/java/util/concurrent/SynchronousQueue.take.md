---
id: "java-en-function-synchronousqueue-take"
language: "java"
lang: "en"
category: "function"
name: "SynchronousQueue.take"
signature: "public E take() throws InterruptedException"
title: "SynchronousQueue.take"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/SynchronousQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SynchronousQueue.take

```java
public E take() throws InterruptedException
```

Retrieves and removes the head of this queue, waiting if necessary
 for another thread to insert it.

**返回**

- the head of this queue

**异常**

- **InterruptedException** — {@inheritDoc}
