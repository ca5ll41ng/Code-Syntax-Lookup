---
id: "java-en-function-blockingdeque-contains"
language: "java"
lang: "en"
category: "function"
name: "BlockingDeque.contains"
signature: "boolean contains(Object o)"
title: "BlockingDeque.contains"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/BlockingDeque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BlockingDeque.contains

```java
boolean contains(Object o)
```

Returns `true` if this deque contains the specified element.
 More formally, returns `true` if and only if this deque contains
 at least one element `e` such that `o.equals(e)`.

**参数**

- **o** — object to be checked for containment in this deque

**返回**

- `true` if this deque contains the specified element

**异常**

- **ClassCastException** — if the class of the specified element is incompatible with this deque (optional)
- **NullPointerException** — if the specified element is null (optional)
