---
id: "java-en-function-delayqueue-remove"
language: "java"
lang: "en"
category: "function"
name: "DelayQueue.remove"
signature: "public E remove()"
title: "DelayQueue.remove"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/DelayQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DelayQueue.remove

```java
public E remove()
```

Retrieves and removes the expired head of
 this queue, or throws an exception if this queue has no
 expired elements.

**返回**

- the expired head of this queue

**异常**

- **NoSuchElementException** — if this queue has no elements with an expired delay

> *Since 21*
