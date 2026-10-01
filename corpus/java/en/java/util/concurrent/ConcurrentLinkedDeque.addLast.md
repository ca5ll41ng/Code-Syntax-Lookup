---
id: "java-en-function-concurrentlinkeddeque-addlast"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentLinkedDeque.addLast"
signature: "public void addLast(E e)"
title: "ConcurrentLinkedDeque.addLast"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentLinkedDeque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentLinkedDeque.addLast

```java
public void addLast(E e)
```

Inserts the specified element at the end of this deque.
 As the deque is unbounded, this method will never throw
 `IllegalStateException`.

 

This method is equivalent to `add`.

**异常**

- **NullPointerException** — if the specified element is null
