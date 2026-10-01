---
id: "java-en-function-blockingdeque-addfirst"
language: "java"
lang: "en"
category: "function"
name: "BlockingDeque.addFirst"
signature: "void addFirst(E e)"
title: "BlockingDeque.addFirst"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/BlockingDeque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BlockingDeque.addFirst

```java
void addFirst(E e)
```

Inserts the specified element at the front of this deque if it is
 possible to do so immediately without violating capacity restrictions,
 throwing an `IllegalStateException` if no space is currently
 available.  When using a capacity-restricted deque, it is generally
 preferable to use `offerFirst(Object) offerFirst`.

**参数**

- **e** — the element to add

**异常**

- **IllegalStateException** — {@inheritDoc}
- **ClassCastException** — {@inheritDoc}
- **NullPointerException** — if the specified element is null
- **IllegalArgumentException** — {@inheritDoc}
