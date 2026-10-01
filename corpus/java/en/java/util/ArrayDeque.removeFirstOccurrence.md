---
id: "java-en-function-arraydeque-removefirstoccurrence"
language: "java"
lang: "en"
category: "function"
name: "ArrayDeque.removeFirstOccurrence"
signature: "public boolean removeFirstOccurrence(Object o)"
title: "ArrayDeque.removeFirstOccurrence"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ArrayDeque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArrayDeque.removeFirstOccurrence

```java
public boolean removeFirstOccurrence(Object o)
```

Removes the first occurrence of the specified element in this
 deque (when traversing the deque from head to tail).
 If the deque does not contain the element, it is unchanged.
 More formally, removes the first element `e` such that
 `o.equals(e)` (if such an element exists).
 Returns `true` if this deque contained the specified element
 (or equivalently, if this deque changed as a result of the call).

**参数**

- **o** — element to be removed from this deque, if present

**返回**

- `true` if the deque contained the specified element
