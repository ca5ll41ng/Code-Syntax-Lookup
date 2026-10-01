---
id: "java-en-function-queue-element"
language: "java"
lang: "en"
category: "function"
name: "Queue.element"
signature: "E element()"
title: "Queue.element"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Queue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Queue.element

```java
E element()
```

Retrieves, but does not remove, the head of this queue.  This method
 differs from `peek peek` only in that it throws an exception
 if this queue is empty.

**返回**

- the head of this queue

**异常**

- **NoSuchElementException** — if this queue is empty
