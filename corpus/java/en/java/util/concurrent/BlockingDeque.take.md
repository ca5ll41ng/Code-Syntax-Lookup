---
id: "java-en-function-blockingdeque-take"
language: "java"
lang: "en"
category: "function"
name: "BlockingDeque.take"
signature: "E take() throws InterruptedException"
title: "BlockingDeque.take"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/BlockingDeque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BlockingDeque.take

```java
E take() throws InterruptedException
```

Retrieves and removes the head of the queue represented by this deque
 (in other words, the first element of this deque), waiting if
 necessary until an element becomes available.

 

This method is equivalent to `takeFirst() takeFirst`.

**返回**

- the head of this deque

**异常**

- **InterruptedException** — if interrupted while waiting
