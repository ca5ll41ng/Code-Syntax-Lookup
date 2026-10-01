---
id: "java-en-function-transferqueue-getwaitingconsumercount"
language: "java"
lang: "en"
category: "function"
name: "TransferQueue.getWaitingConsumerCount"
signature: "int getWaitingConsumerCount()"
title: "TransferQueue.getWaitingConsumerCount"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/TransferQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TransferQueue.getWaitingConsumerCount

```java
int getWaitingConsumerCount()
```

Returns an estimate of the number of consumers waiting to
 receive elements via `take` or timed
 `poll(long,TimeUnit) poll`.  The return value is an
 approximation of a momentary state of affairs, that may be
 inaccurate if consumers have completed or given up waiting.
 The value may be useful for monitoring and heuristics, but
 not for synchronization control.  Implementations of this
 method are likely to be noticeably slower than those for
 `hasWaitingConsumer`.

**返回**

- the number of consumers waiting to receive elements
