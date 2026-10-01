---
id: "java-en-function-blockingqueue-add"
language: "java"
lang: "en"
category: "function"
name: "BlockingQueue.add"
signature: "boolean add(E e)"
title: "BlockingQueue.add"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/BlockingQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BlockingQueue.add

```java
boolean add(E e)
```

Inserts the specified element into this queue if it is possible to do
 so immediately without violating capacity restrictions, returning
 `true` upon success and throwing an
 `IllegalStateException` if no space is currently available.
 When using a capacity-restricted queue, it is generally preferable to
 use `offer(Object) offer`.

**参数**

- **e** — the element to add

**返回**

- `true` (as specified by `add`)

**异常**

- **IllegalStateException** — if the element cannot be added at this time due to capacity restrictions
- **ClassCastException** — if the class of the specified element prevents it from being added to this queue
- **NullPointerException** — if the specified element is null
- **IllegalArgumentException** — if some property of the specified element prevents it from being added to this queue
