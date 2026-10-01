---
id: "java-en-function-abstractqueue-remove"
language: "java"
lang: "en"
category: "function"
name: "AbstractQueue.remove"
signature: "public E remove()"
title: "AbstractQueue.remove"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueue.remove

```java
public E remove()
```

Retrieves and removes the head of this queue.  This method differs
 from `poll poll` only in that it throws an exception if this
 queue is empty.

 

This implementation returns the result of `poll`
 unless the queue is empty.

**返回**

- the head of this queue

**异常**

- **NoSuchElementException** — if this queue is empty
