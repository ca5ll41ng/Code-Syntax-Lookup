---
id: "java-en-function-queue-remove"
language: "java"
lang: "en"
category: "function"
name: "Queue.remove"
signature: "E remove()"
title: "Queue.remove"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Queue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Queue.remove

```java
E remove()
```

Retrieves and removes the head of this queue.  This method differs
 from `poll` only in that it throws an exception if
 this queue is empty.

**返回**

- the head of this queue

**异常**

- **NoSuchElementException** — if this queue is empty
