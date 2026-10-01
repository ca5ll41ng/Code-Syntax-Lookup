---
id: "java-en-function-blockingdeque-removelastoccurrence"
language: "java"
lang: "en"
category: "function"
name: "BlockingDeque.removeLastOccurrence"
signature: "boolean removeLastOccurrence(Object o)"
title: "BlockingDeque.removeLastOccurrence"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/BlockingDeque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BlockingDeque.removeLastOccurrence

```java
boolean removeLastOccurrence(Object o)
```

Removes the last occurrence of the specified element from this deque.
 If the deque does not contain the element, it is unchanged.
 More formally, removes the last element `e` such that
 `o.equals(e)` (if such an element exists).
 Returns `true` if this deque contained the specified element
 (or equivalently, if this deque changed as a result of the call).

**参数**

- **o** — element to be removed from this deque, if present

**返回**

- `true` if an element was removed as a result of this call

**异常**

- **ClassCastException** — if the class of the specified element is incompatible with this deque (optional)
- **NullPointerException** — if the specified element is null (optional)
