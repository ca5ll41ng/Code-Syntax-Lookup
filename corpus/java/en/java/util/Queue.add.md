---
id: "java-en-function-queue-add"
language: "java"
lang: "en"
category: "function"
name: "Queue.add"
signature: "boolean add(E e)"
title: "Queue.add"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Queue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Queue.add

```java
boolean add(E e)
```

Inserts the specified element into this queue if it is possible to do so
 immediately without violating capacity restrictions, returning
 `true` upon success and throwing an `IllegalStateException`
 if no space is currently available.

**参数**

- **e** — the element to add

**返回**

- `true` (as specified by `add`)

**异常**

- **IllegalStateException** — if the element cannot be added at this time due to capacity restrictions
- **ClassCastException** — if the class of the specified element prevents it from being added to this queue
- **NullPointerException** — if the specified element is null and this queue does not permit null elements
- **IllegalArgumentException** — if some property of this element prevents it from being added to this queue
