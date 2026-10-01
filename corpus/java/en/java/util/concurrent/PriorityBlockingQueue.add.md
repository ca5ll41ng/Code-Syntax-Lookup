---
id: "java-en-function-priorityblockingqueue-add"
language: "java"
lang: "en"
category: "function"
name: "PriorityBlockingQueue.add"
signature: "public boolean add(E e)"
title: "PriorityBlockingQueue.add"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/PriorityBlockingQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PriorityBlockingQueue.add

```java
public boolean add(E e)
```

Inserts the specified element into this priority queue.

**参数**

- **e** — the element to add

**返回**

- `true` (as specified by `add`)

**异常**

- **ClassCastException** — if the specified element cannot be compared with elements currently in the priority queue according to the priority queue's ordering
- **NullPointerException** — if the specified element is null
