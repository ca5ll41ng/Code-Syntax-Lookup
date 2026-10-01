---
id: "java-en-function-deque-reversed"
language: "java"
lang: "en"
category: "function"
name: "Deque.reversed"
signature: "default Deque<E> reversed()"
title: "Deque.reversed"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Deque.reversed

```java
default Deque<E> reversed()
```

{@inheritDoc}

 The implementation in this interface returns a reverse-ordered Deque
 view. The `reversed()` method of the view returns a reference
 to this Deque. Other operations on the view are implemented via calls to
 public methods on this Deque. The exact relationship between calls on the
 view and calls on this Deque is unspecified. However, order-sensitive
 operations generally behave as if they delegate to the appropriate method
 with the opposite orientation. For example, calling `getFirst` on
 the view might result in a call to `getLast` on this Deque.

**返回**

- a reverse-ordered view of this collection, as a `Deque`

> *Since 21*
