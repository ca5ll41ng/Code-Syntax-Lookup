---
id: "java-en-function-deque-getlast"
language: "java"
lang: "en"
category: "function"
name: "Deque.getLast"
signature: "E getLast()"
title: "Deque.getLast"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Deque.getLast

```java
E getLast()
```

Retrieves, but does not remove, the last element of this deque.
 This method differs from `peekLast peekLast` only in that it
 throws an exception if this deque is empty.

**返回**

- the tail of this deque

**异常**

- **NoSuchElementException** — if this deque is empty
