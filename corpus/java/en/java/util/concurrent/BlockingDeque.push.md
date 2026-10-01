---
id: "java-en-function-blockingdeque-push"
language: "java"
lang: "en"
category: "function"
name: "BlockingDeque.push"
signature: "void push(E e)"
title: "BlockingDeque.push"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/BlockingDeque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BlockingDeque.push

```java
void push(E e)
```

Pushes an element onto the stack represented by this deque (in other
 words, at the head of this deque) if it is possible to do so
 immediately without violating capacity restrictions, throwing an
 `IllegalStateException` if no space is currently available.

 

This method is equivalent to `addFirst(Object) addFirst`.

**异常**

- **IllegalStateException** — {@inheritDoc}
- **ClassCastException** — {@inheritDoc}
- **NullPointerException** — if the specified element is null
- **IllegalArgumentException** — {@inheritDoc}
