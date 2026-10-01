---
id: "java-en-function-delayqueue-poll"
language: "java"
lang: "en"
category: "function"
name: "DelayQueue.poll"
signature: "public E poll()"
title: "DelayQueue.poll"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/DelayQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DelayQueue.poll

```java
public E poll()
```

Retrieves and removes the expired head of
 this queue, or returns `null` if this queue has no
 expired elements.

**返回**

- the expired head of this queue, or `null` if this queue has no elements with an expired delay
