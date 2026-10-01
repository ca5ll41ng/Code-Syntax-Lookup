---
id: "java-en-function-deque-pop"
language: "java"
lang: "en"
category: "function"
name: "Deque.pop"
signature: "E pop()"
title: "Deque.pop"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Deque.pop

```java
E pop()
```

Pops an element from the stack represented by this deque.  In other
 words, removes and returns the first element of this deque.

 

This method is equivalent to `removeFirst`.

**返回**

- the element at the front of this deque (which is the top of the stack represented by this deque)

**异常**

- **NoSuchElementException** — if this deque is empty
