---
id: "java-en-function-synchronousqueue-put"
language: "java"
lang: "en"
category: "function"
name: "SynchronousQueue.put"
signature: "public void put(E e) throws InterruptedException"
title: "SynchronousQueue.put"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/SynchronousQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SynchronousQueue.put

```java
public void put(E e) throws InterruptedException
```

Adds the specified element to this queue, waiting if necessary for
 another thread to receive it.

**异常**

- **InterruptedException** — {@inheritDoc}
- **NullPointerException** — {@inheritDoc}
