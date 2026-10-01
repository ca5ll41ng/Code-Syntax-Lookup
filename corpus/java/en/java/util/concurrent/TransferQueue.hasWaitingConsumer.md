---
id: "java-en-function-transferqueue-haswaitingconsumer"
language: "java"
lang: "en"
category: "function"
name: "TransferQueue.hasWaitingConsumer"
signature: "boolean hasWaitingConsumer()"
title: "TransferQueue.hasWaitingConsumer"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/TransferQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TransferQueue.hasWaitingConsumer

```java
boolean hasWaitingConsumer()
```

Returns `true` if there is at least one consumer waiting
 to receive an element via `take` or
 timed `poll(long,TimeUnit) poll`.
 The return value represents a momentary state of affairs.

**返回**

- `true` if there is at least one waiting consumer
