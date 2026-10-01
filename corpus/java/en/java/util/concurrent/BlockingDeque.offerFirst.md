---
id: "java-en-function-blockingdeque-offerfirst"
language: "java"
lang: "en"
category: "function"
name: "BlockingDeque.offerFirst"
signature: "boolean offerFirst(E e)"
title: "BlockingDeque.offerFirst"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/BlockingDeque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BlockingDeque.offerFirst

```java
boolean offerFirst(E e)
```

Inserts the specified element at the front of this deque if it is
 possible to do so immediately without violating capacity restrictions,
 returning `true` upon success and `false` if no space is
 currently available.
 When using a capacity-restricted deque, this method is generally
 preferable to the `addFirst(Object) addFirst` method, which can
 fail to insert an element only by throwing an exception.

**参数**

- **e** — the element to add

**异常**

- **ClassCastException** — {@inheritDoc}
- **NullPointerException** — if the specified element is null
- **IllegalArgumentException** — {@inheritDoc}
