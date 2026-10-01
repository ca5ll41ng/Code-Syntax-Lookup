---
id: "java-en-function-deque-push"
language: "java"
lang: "en"
category: "function"
name: "Deque.push"
signature: "void push(E e)"
title: "Deque.push"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Deque.push

```java
void push(E e)
```

Pushes an element onto the stack represented by this deque (in other
 words, at the head of this deque) if it is possible to do so
 immediately without violating capacity restrictions, throwing an
 `IllegalStateException` if no space is currently available.

 

This method is equivalent to `addFirst`.

**参数**

- **e** — the element to push

**异常**

- **IllegalStateException** — if the element cannot be added at this time due to capacity restrictions
- **ClassCastException** — if the class of the specified element prevents it from being added to this deque
- **NullPointerException** — if the specified element is null and this deque does not permit null elements
- **IllegalArgumentException** — if some property of the specified element prevents it from being added to this deque
