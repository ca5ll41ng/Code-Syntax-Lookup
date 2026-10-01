---
id: "java-en-function-blockingdeque-put"
language: "java"
lang: "en"
category: "function"
name: "BlockingDeque.put"
signature: "void put(E e) throws InterruptedException"
title: "BlockingDeque.put"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/BlockingDeque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BlockingDeque.put

```java
void put(E e) throws InterruptedException
```

Inserts the specified element into the queue represented by this deque
 (in other words, at the tail of this deque), waiting if necessary for
 space to become available.

 

This method is equivalent to `putLast(Object) putLast`.

**参数**

- **e** — the element to add

**异常**

- **InterruptedException** — {@inheritDoc}
- **ClassCastException** — if the class of the specified element prevents it from being added to this deque
- **NullPointerException** — if the specified element is null
- **IllegalArgumentException** — if some property of the specified element prevents it from being added to this deque
