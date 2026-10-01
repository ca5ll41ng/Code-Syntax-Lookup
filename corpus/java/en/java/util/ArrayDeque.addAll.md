---
id: "java-en-function-arraydeque-addall"
language: "java"
lang: "en"
category: "function"
name: "ArrayDeque.addAll"
signature: "public boolean addAll(Collection<? extends E> c)"
title: "ArrayDeque.addAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ArrayDeque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArrayDeque.addAll

```java
public boolean addAll(Collection<? extends E> c)
```

Adds all of the elements in the specified collection at the end
 of this deque, as if by calling `addLast` on each one,
 in the order that they are returned by the collection's iterator.

**参数**

- **c** — the elements to be inserted into this deque

**返回**

- `true` if this deque changed as a result of the call

**异常**

- **NullPointerException** — if the specified collection or any of its elements are null
