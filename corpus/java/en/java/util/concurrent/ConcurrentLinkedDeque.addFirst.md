---
id: "java-en-function-concurrentlinkeddeque-addfirst"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentLinkedDeque.addFirst"
signature: "public void addFirst(E e)"
title: "ConcurrentLinkedDeque.addFirst"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentLinkedDeque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentLinkedDeque.addFirst

```java
public void addFirst(E e)
```

Inserts the specified element at the front of this deque.
 As the deque is unbounded, this method will never throw
 `IllegalStateException`.

**异常**

- **NullPointerException** — if the specified element is null
