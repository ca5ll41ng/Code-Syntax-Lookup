---
id: "java-en-function-queue-offer"
language: "java"
lang: "en"
category: "function"
name: "Queue.offer"
signature: "boolean offer(E e)"
title: "Queue.offer"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Queue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Queue.offer

```java
boolean offer(E e)
```

Inserts the specified element into this queue if it is possible to do
 so immediately without violating capacity restrictions.
 When using a capacity-restricted queue, this method is generally
 preferable to `add`, which can fail to insert an element only
 by throwing an exception.

**参数**

- **e** — the element to add

**返回**

- `true` if the element was added to this queue, else `false`

**异常**

- **ClassCastException** — if the class of the specified element prevents it from being added to this queue
- **NullPointerException** — if the specified element is null and this queue does not permit null elements
- **IllegalArgumentException** — if some property of this element prevents it from being added to this queue
