---
id: "java-en-function-concurrentlinkeddeque-offer"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentLinkedDeque.offer"
signature: "public boolean offer(E e)"
title: "ConcurrentLinkedDeque.offer"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentLinkedDeque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentLinkedDeque.offer

```java
public boolean offer(E e)
```

Inserts the specified element at the tail of this deque.
 As the deque is unbounded, this method will never return `false`.

**返回**

- `true` (as specified by `offer`)

**异常**

- **NullPointerException** — if the specified element is null
