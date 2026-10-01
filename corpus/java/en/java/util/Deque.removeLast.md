---
id: "java-en-function-deque-removelast"
language: "java"
lang: "en"
category: "function"
name: "Deque.removeLast"
signature: "E removeLast()"
title: "Deque.removeLast"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Deque.removeLast

```java
E removeLast()
```

Retrieves and removes the last element of this deque.  This method
 differs from `pollLast pollLast` only in that it throws an
 exception if this deque is empty.

**返回**

- the tail of this deque

**异常**

- **NoSuchElementException** — if this deque is empty
