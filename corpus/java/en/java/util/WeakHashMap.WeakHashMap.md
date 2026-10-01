---
id: "java-en-function-weakhashmap-weakhashmap"
language: "java"
lang: "en"
category: "function"
name: "WeakHashMap.WeakHashMap"
signature: "public WeakHashMap(int initialCapacity, float loadFactor)"
title: "WeakHashMap.WeakHashMap"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/WeakHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WeakHashMap.WeakHashMap

```java
public WeakHashMap(int initialCapacity, float loadFactor)
```

Constructs a new, empty `WeakHashMap` with the given initial
 capacity and the given load factor.

 To create a `WeakHashMap` with an initial capacity that accommodates
 an expected number of mappings, use `newWeakHashMap(int) newWeakHashMap`.

**参数**

- **initialCapacity** — The initial capacity of the `WeakHashMap`
- **loadFactor** — The load factor of the `WeakHashMap`

**异常**

- **IllegalArgumentException** — if the initial capacity is negative, or if the load factor is nonpositive.
