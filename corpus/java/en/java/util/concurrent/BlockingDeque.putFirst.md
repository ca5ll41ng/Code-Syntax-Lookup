---
id: "java-en-function-blockingdeque-putfirst"
language: "java"
lang: "en"
category: "function"
name: "BlockingDeque.putFirst"
signature: "void putFirst(E e) throws InterruptedException"
title: "BlockingDeque.putFirst"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/BlockingDeque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BlockingDeque.putFirst

```java
void putFirst(E e) throws InterruptedException
```

Inserts the specified element at the front of this deque,
 waiting if necessary for space to become available.

**参数**

- **e** — the element to add

**异常**

- **InterruptedException** — if interrupted while waiting
- **ClassCastException** — if the class of the specified element prevents it from being added to this deque
- **NullPointerException** — if the specified element is null
- **IllegalArgumentException** — if some property of the specified element prevents it from being added to this deque
