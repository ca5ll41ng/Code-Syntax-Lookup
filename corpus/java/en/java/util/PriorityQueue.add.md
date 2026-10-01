---
id: "java-en-function-priorityqueue-add"
language: "java"
lang: "en"
category: "function"
name: "PriorityQueue.add"
signature: "public boolean add(E e)"
title: "PriorityQueue.add"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/PriorityQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PriorityQueue.add

```java
public boolean add(E e)
```

Inserts the specified element into this priority queue.

**返回**

- `true` (as specified by `add`)

**异常**

- **ClassCastException** — if the specified element cannot be compared with elements currently in this priority queue according to the priority queue's ordering
- **NullPointerException** — if the specified element is null
