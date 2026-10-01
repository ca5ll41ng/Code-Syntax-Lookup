---
id: "java-en-function-delayqueue-clear"
language: "java"
lang: "en"
category: "function"
name: "DelayQueue.clear"
signature: "public void clear()"
title: "DelayQueue.clear"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/DelayQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DelayQueue.clear

```java
public void clear()
```

Atomically removes all of the elements from this delay queue.
 The queue will be empty after this call returns.
 Elements with an unexpired delay are not waited for; they are
 simply discarded from the queue.
