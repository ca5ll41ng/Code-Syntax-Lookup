---
id: "java-en-function-arrayblockingqueue-add"
language: "java"
lang: "en"
category: "function"
name: "ArrayBlockingQueue.add"
signature: "public boolean add(E e)"
title: "ArrayBlockingQueue.add"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ArrayBlockingQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArrayBlockingQueue.add

```java
public boolean add(E e)
```

Inserts the specified element at the tail of this queue if it is
 possible to do so immediately without exceeding the queue's capacity,
 returning `true` upon success and throwing an
 `IllegalStateException` if this queue is full.

**参数**

- **e** — the element to add

**返回**

- `true` (as specified by `add`)

**异常**

- **IllegalStateException** — if this queue is full
- **NullPointerException** — if the specified element is null
