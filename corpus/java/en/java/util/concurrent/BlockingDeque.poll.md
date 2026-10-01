---
id: "java-en-function-blockingdeque-poll"
language: "java"
lang: "en"
category: "function"
name: "BlockingDeque.poll"
signature: "E poll()"
title: "BlockingDeque.poll"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/BlockingDeque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BlockingDeque.poll

```java
E poll()
```

Retrieves and removes the head of the queue represented by this deque
 (in other words, the first element of this deque), or returns
 `null` if this deque is empty.

 

This method is equivalent to `pollFirst`.

**返回**

- the head of this deque, or `null` if this deque is empty
