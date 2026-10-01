---
id: "java-en-function-delayqueue-peek"
language: "java"
lang: "en"
category: "function"
name: "DelayQueue.peek"
signature: "public E peek()"
title: "DelayQueue.peek"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/DelayQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DelayQueue.peek

```java
public E peek()
```

Retrieves, but does not remove, the head of this
 queue, or returns `null` if this queue is empty.
 Unlike `poll`, if no expired elements are available in the queue,
 this method returns the element that will expire next, if one exists.

**返回**

- the head of this queue, or `null` if this queue is empty
