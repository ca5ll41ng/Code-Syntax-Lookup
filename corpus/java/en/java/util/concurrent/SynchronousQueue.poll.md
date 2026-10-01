---
id: "java-en-function-synchronousqueue-poll"
language: "java"
lang: "en"
category: "function"
name: "SynchronousQueue.poll"
signature: "public E poll(long timeout, TimeUnit unit) throws InterruptedException"
title: "SynchronousQueue.poll"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/SynchronousQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SynchronousQueue.poll

```java
public E poll(long timeout, TimeUnit unit) throws InterruptedException
```

Retrieves and removes the head of this queue, waiting
 if necessary up to the specified wait time, for another thread
 to insert it.

**返回**

- the head of this queue, or `null` if the specified waiting time elapses before an element is present

**异常**

- **InterruptedException** — {@inheritDoc}
