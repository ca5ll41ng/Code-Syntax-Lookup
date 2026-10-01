---
id: "java-en-function-deque-removefirst"
language: "java"
lang: "en"
category: "function"
name: "Deque.removeFirst"
signature: "E removeFirst()"
title: "Deque.removeFirst"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Deque.removeFirst

```java
E removeFirst()
```

Retrieves and removes the first element of this deque.  This method
 differs from `pollFirst pollFirst` only in that it throws an
 exception if this deque is empty.

**返回**

- the head of this deque

**异常**

- **NoSuchElementException** — if this deque is empty
