---
id: "java-en-function-concurrentlinkeddeque-offerlast"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentLinkedDeque.offerLast"
signature: "public boolean offerLast(E e)"
title: "ConcurrentLinkedDeque.offerLast"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentLinkedDeque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentLinkedDeque.offerLast

```java
public boolean offerLast(E e)
```

Inserts the specified element at the end of this deque.
 As the deque is unbounded, this method will never return `false`.

 

This method is equivalent to `add`.

**返回**

- `true` (as specified by `offerLast`)

**异常**

- **NullPointerException** — if the specified element is null
