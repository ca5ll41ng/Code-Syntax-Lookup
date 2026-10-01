---
id: "java-en-function-blockingdeque-addlast"
language: "java"
lang: "en"
category: "function"
name: "BlockingDeque.addLast"
signature: "void addLast(E e)"
title: "BlockingDeque.addLast"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/BlockingDeque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BlockingDeque.addLast

```java
void addLast(E e)
```

Inserts the specified element at the end of this deque if it is
 possible to do so immediately without violating capacity restrictions,
 throwing an `IllegalStateException` if no space is currently
 available.  When using a capacity-restricted deque, it is generally
 preferable to use `offerLast(Object) offerLast`.

**参数**

- **e** — the element to add

**异常**

- **IllegalStateException** — {@inheritDoc}
- **ClassCastException** — {@inheritDoc}
- **NullPointerException** — if the specified element is null
- **IllegalArgumentException** — {@inheritDoc}
