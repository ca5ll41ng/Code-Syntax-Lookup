---
id: "java-en-function-arraydeque-pop"
language: "java"
lang: "en"
category: "function"
name: "ArrayDeque.pop"
signature: "public E pop()"
title: "ArrayDeque.pop"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ArrayDeque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArrayDeque.pop

```java
public E pop()
```

Pops an element from the stack represented by this deque.  In other
 words, removes and returns the first element of this deque.

 

This method is equivalent to `removeFirst`.

**返回**

- the element at the front of this deque (which is the top of the stack represented by this deque)

**异常**

- **NoSuchElementException** — {@inheritDoc}
