---
id: "java-en-function-arraydeque-remove"
language: "java"
lang: "en"
category: "function"
name: "ArrayDeque.remove"
signature: "public E remove()"
title: "ArrayDeque.remove"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ArrayDeque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArrayDeque.remove

```java
public E remove()
```

Retrieves and removes the head of the queue represented by this deque.

 This method differs from `poll` only in that it
 throws an exception if this deque is empty.

 

This method is equivalent to `removeFirst`.

**返回**

- the head of the queue represented by this deque

**异常**

- **NoSuchElementException** — {@inheritDoc}
