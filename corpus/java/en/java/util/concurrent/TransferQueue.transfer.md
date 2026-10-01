---
id: "java-en-function-transferqueue-transfer"
language: "java"
lang: "en"
category: "function"
name: "TransferQueue.transfer"
signature: "void transfer(E e) throws InterruptedException"
title: "TransferQueue.transfer"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/TransferQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TransferQueue.transfer

```java
void transfer(E e) throws InterruptedException
```

Transfers the element to a consumer, waiting if necessary to do so.

 

More precisely, transfers the specified element immediately
 if there exists a consumer already waiting to receive it (in
 `take` or timed `poll(long,TimeUnit) poll`),
 else waits until the element is received by a consumer.

**参数**

- **e** — the element to transfer

**异常**

- **InterruptedException** — if interrupted while waiting, in which case the element is not left enqueued
- **ClassCastException** — if the class of the specified element prevents it from being added to this queue
- **NullPointerException** — if the specified element is null
- **IllegalArgumentException** — if some property of the specified element prevents it from being added to this queue
