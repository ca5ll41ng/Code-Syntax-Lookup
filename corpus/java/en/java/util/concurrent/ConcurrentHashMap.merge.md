---
id: "java-en-function-concurrenthashmap-merge"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentHashMap.merge"
signature: "public V merge(K key, V value, BiFunction<? super V, ? super V, ? extends V> remappingFunction)"
title: "ConcurrentHashMap.merge"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentHashMap.merge

```java
public V merge(K key, V value, BiFunction<? super V, ? super V, ? extends V> remappingFunction)
```

If the specified key is not already associated with a
 (non-null) value, associates it with the given value.
 Otherwise, replaces the value with the results of the given
 remapping function, or removes if `null`. The entire
 method invocation is performed atomically.  Some attempted
 update operations on this map by other threads may be blocked
 while computation is in progress, so the computation should be
 short and simple, and must not attempt to update any other
 mappings of this Map.

**参数**

- **key** — key with which the specified value is to be associated
- **value** — the value to use if absent
- **remappingFunction** — the function to recompute a value if present

**返回**

- the new value associated with the specified key, or null if none

**异常**

- **NullPointerException** — if the specified key or the remappingFunction is null
- **RuntimeException** — or Error if the remappingFunction does so, in which case the mapping is unchanged
