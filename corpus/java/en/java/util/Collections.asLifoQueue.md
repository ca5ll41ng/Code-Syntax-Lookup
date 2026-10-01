---
id: "java-en-function-collections-aslifoqueue"
language: "java"
lang: "en"
category: "function"
name: "Collections.asLifoQueue"
signature: "public static <T> Queue<T> asLifoQueue(Deque<T> deque)"
title: "Collections.asLifoQueue"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.asLifoQueue

```java
public static <T> Queue<T> asLifoQueue(Deque<T> deque)
```

Returns a view of a `Deque` as a Last-in-first-out (Lifo)
 `Queue`. Method `add` is mapped to `push`,
 `remove` is mapped to `pop` and so on. This
 view can be useful when you would like to use a method
 requiring a `Queue` but you need Lifo ordering.

 

Each method invocation on the queue returned by this method
 results in exactly one method invocation on the backing deque, with
 one exception.  The `addAll addAll` method is
 implemented as a sequence of `addFirst addFirst`
 invocations on the backing deque.

 This method provides a view that inverts the sense of certain operations,
 but it doesn't reverse the encounter order. To obtain a reverse-ordered
 view, use the `reversed Deque.reversed` method.

**参数**

- **the** — class of the objects in the deque
- **deque** — the deque

**返回**

- the queue

> *Since 1.6*
