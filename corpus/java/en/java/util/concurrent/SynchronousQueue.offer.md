---
id: "java-en-function-synchronousqueue-offer"
language: "java"
lang: "en"
category: "function"
name: "SynchronousQueue.offer"
signature: "public boolean offer(E e, long timeout, TimeUnit unit) throws InterruptedException"
title: "SynchronousQueue.offer"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/SynchronousQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SynchronousQueue.offer

```java
public boolean offer(E e, long timeout, TimeUnit unit) throws InterruptedException
```

Inserts the specified element into this queue, waiting if necessary
 up to the specified wait time for another thread to receive it.

**返回**

- `true` if successful, or `false` if the specified waiting time elapses before a consumer appears

**异常**

- **InterruptedException** — {@inheritDoc}
- **NullPointerException** — {@inheritDoc}
