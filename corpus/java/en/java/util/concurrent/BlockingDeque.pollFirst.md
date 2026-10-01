---
id: "java-en-function-blockingdeque-pollfirst"
language: "java"
lang: "en"
category: "function"
name: "BlockingDeque.pollFirst"
signature: "E pollFirst(long timeout, TimeUnit unit) throws InterruptedException"
title: "BlockingDeque.pollFirst"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/BlockingDeque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BlockingDeque.pollFirst

```java
E pollFirst(long timeout, TimeUnit unit) throws InterruptedException
```

Retrieves and removes the first element of this deque, waiting
 up to the specified wait time if necessary for an element to
 become available.

**参数**

- **timeout** — how long to wait before giving up, in units of `unit`
- **unit** — a `TimeUnit` determining how to interpret the `timeout` parameter

**返回**

- the head of this deque, or `null` if the specified waiting time elapses before an element is available

**异常**

- **InterruptedException** — if interrupted while waiting
