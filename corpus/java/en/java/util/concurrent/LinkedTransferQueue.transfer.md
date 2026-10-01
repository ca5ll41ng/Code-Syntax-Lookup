---
id: "java-en-function-linkedtransferqueue-transfer"
language: "java"
lang: "en"
category: "function"
name: "LinkedTransferQueue.transfer"
signature: "public void transfer(E e) throws InterruptedException"
title: "LinkedTransferQueue.transfer"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/LinkedTransferQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LinkedTransferQueue.transfer

```java
public void transfer(E e) throws InterruptedException
```

Transfers the element to a consumer, waiting if necessary to do so.

 

More precisely, transfers the specified element immediately
 if there exists a consumer already waiting to receive it (in
 `take` or timed `poll(long,TimeUnit) poll`),
 else inserts the specified element at the tail of this queue
 and waits until the element is received by a consumer.

**异常**

- **NullPointerException** — if the specified element is null
