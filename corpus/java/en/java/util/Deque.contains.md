---
id: "java-en-function-deque-contains"
language: "java"
lang: "en"
category: "function"
name: "Deque.contains"
signature: "boolean contains(Object o)"
title: "Deque.contains"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Deque.contains

```java
boolean contains(Object o)
```

Returns `true` if this deque contains the specified element.
 More formally, returns `true` if and only if this deque contains
 at least one element `e` such that `Objects.equals(o, e)`.

**参数**

- **o** — element whose presence in this deque is to be tested

**返回**

- `true` if this deque contains the specified element

**异常**

- **ClassCastException** — if the class of the specified element is incompatible with this deque (`#optional-restrictions optional`)
- **NullPointerException** — if the specified element is null and this deque does not permit null elements (`#optional-restrictions optional`)
