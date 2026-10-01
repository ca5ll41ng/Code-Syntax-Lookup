---
id: "java-en-function-cyclicbarrier-getnumberwaiting"
language: "java"
lang: "en"
category: "function"
name: "CyclicBarrier.getNumberWaiting"
signature: "public int getNumberWaiting()"
title: "CyclicBarrier.getNumberWaiting"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CyclicBarrier.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CyclicBarrier.getNumberWaiting

```java
public int getNumberWaiting()
```

Returns the number of parties currently waiting at the barrier.
 This method is primarily useful for debugging and assertions.

**返回**

- the number of parties currently blocked in `await`
