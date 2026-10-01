---
id: "java-en-function-priorityqueue-offer"
language: "java"
lang: "en"
category: "function"
name: "PriorityQueue.offer"
signature: "public boolean offer(E e)"
title: "PriorityQueue.offer"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/PriorityQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PriorityQueue.offer

```java
public boolean offer(E e)
```

Inserts the specified element into this priority queue.

**返回**

- `true` (as specified by `offer`)

**异常**

- **ClassCastException** — if the specified element cannot be compared with elements currently in this priority queue according to the priority queue's ordering
- **NullPointerException** — if the specified element is null
