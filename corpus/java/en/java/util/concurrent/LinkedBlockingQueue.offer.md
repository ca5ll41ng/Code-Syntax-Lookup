---
id: "java-en-function-linkedblockingqueue-offer"
language: "java"
lang: "en"
category: "function"
name: "LinkedBlockingQueue.offer"
signature: "public boolean offer(E e, long timeout, TimeUnit unit) throws InterruptedException"
title: "LinkedBlockingQueue.offer"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/LinkedBlockingQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LinkedBlockingQueue.offer

```java
public boolean offer(E e, long timeout, TimeUnit unit) throws InterruptedException
```

Inserts the specified element at the tail of this queue, waiting if
 necessary up to the specified wait time for space to become available.

**返回**

- `true` if successful, or `false` if the specified waiting time elapses before space is available

**异常**

- **InterruptedException** — {@inheritDoc}
- **NullPointerException** — {@inheritDoc}
