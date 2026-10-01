---
id: "java-en-function-linkedblockingdeque-add"
language: "java"
lang: "en"
category: "function"
name: "LinkedBlockingDeque.add"
signature: "public boolean add(E e)"
title: "LinkedBlockingDeque.add"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/LinkedBlockingDeque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LinkedBlockingDeque.add

```java
public boolean add(E e)
```

Inserts the specified element at the end of this deque unless it would
 violate capacity restrictions.  When using a capacity-restricted deque,
 it is generally preferable to use method `offer(Object) offer`.

 

This method is equivalent to `addLast`.

**异常**

- **IllegalStateException** — if this deque is full
- **NullPointerException** — if the specified element is null
