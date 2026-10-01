---
id: "java-en-function-concurrentskiplistmap-merge"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentSkipListMap.merge"
signature: "public V merge(K key, V value, BiFunction<? super V, ? super V, ? extends V> remappingFunction)"
title: "ConcurrentSkipListMap.merge"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentSkipListMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentSkipListMap.merge

```java
public V merge(K key, V value, BiFunction<? super V, ? super V, ? extends V> remappingFunction)
```

If the specified key is not already associated with a value,
 associates it with the given value.  Otherwise, replaces the
 value with the results of the given remapping function, or
 removes if `null`. The function is NOT
 guaranteed to be applied once atomically.

**参数**

- **key** — key with which the specified value is to be associated
- **value** — the value to use if absent
- **remappingFunction** — the function to recompute a value if present

**返回**

- the new value associated with the specified key, or null if none

**异常**

- **NullPointerException** — if the specified key or value is null or the remappingFunction is null

> *Since 1.8*
