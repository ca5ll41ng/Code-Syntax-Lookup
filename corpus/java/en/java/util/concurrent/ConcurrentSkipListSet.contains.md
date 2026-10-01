---
id: "java-en-function-concurrentskiplistset-contains"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentSkipListSet.contains"
signature: "public boolean contains(Object o)"
title: "ConcurrentSkipListSet.contains"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentSkipListSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentSkipListSet.contains

```java
public boolean contains(Object o)
```

Returns `true` if this set contains the specified element.
 More formally, returns `true` if and only if this set
 contains an element `e` such that `o.equals(e)`.

**参数**

- **o** — object to be checked for containment in this set

**返回**

- `true` if this set contains the specified element

**异常**

- **ClassCastException** — if the specified element cannot be compared with the elements currently in this set
- **NullPointerException** — if the specified element is null
