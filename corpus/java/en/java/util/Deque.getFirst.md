---
id: "java-en-function-deque-getfirst"
language: "java"
lang: "en"
category: "function"
name: "Deque.getFirst"
signature: "E getFirst()"
title: "Deque.getFirst"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Deque.getFirst

```java
E getFirst()
```

Retrieves, but does not remove, the first element of this deque.

 This method differs from `peekFirst peekFirst` only in that it
 throws an exception if this deque is empty.

**返回**

- the head of this deque

**异常**

- **NoSuchElementException** — if this deque is empty
