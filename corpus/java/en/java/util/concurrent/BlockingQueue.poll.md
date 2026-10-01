---
id: "java-en-function-blockingqueue-poll"
language: "java"
lang: "en"
category: "function"
name: "BlockingQueue.poll"
signature: "E poll(long timeout, TimeUnit unit) throws InterruptedException"
title: "BlockingQueue.poll"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/BlockingQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BlockingQueue.poll

```java
E poll(long timeout, TimeUnit unit) throws InterruptedException
```

Retrieves and removes the head of this queue, waiting up to the
 specified wait time if necessary for an element to become available.

**参数**

- **timeout** — how long to wait before giving up, in units of `unit`
- **unit** — a `TimeUnit` determining how to interpret the `timeout` parameter

**返回**

- the head of this queue, or `null` if the specified waiting time elapses before an element is available

**异常**

- **InterruptedException** — if interrupted while waiting
