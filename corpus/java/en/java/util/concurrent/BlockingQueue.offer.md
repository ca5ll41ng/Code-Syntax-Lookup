---
id: "java-en-function-blockingqueue-offer"
language: "java"
lang: "en"
category: "function"
name: "BlockingQueue.offer"
signature: "boolean offer(E e)"
title: "BlockingQueue.offer"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/BlockingQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BlockingQueue.offer

```java
boolean offer(E e)
```

Inserts the specified element into this queue if it is possible to do
 so immediately without violating capacity restrictions, returning
 `true` upon success and `false` if no space is currently
 available.  When using a capacity-restricted queue, this method is
 generally preferable to `add`, which can fail to insert an
 element only by throwing an exception.

**参数**

- **e** — the element to add

**返回**

- `true` if the element was added to this queue, else `false`

**异常**

- **ClassCastException** — if the class of the specified element prevents it from being added to this queue
- **NullPointerException** — if the specified element is null
- **IllegalArgumentException** — if some property of the specified element prevents it from being added to this queue
