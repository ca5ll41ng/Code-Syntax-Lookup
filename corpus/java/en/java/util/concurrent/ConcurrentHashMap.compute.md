---
id: "java-en-function-concurrenthashmap-compute"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentHashMap.compute"
signature: "public V compute(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction)"
title: "ConcurrentHashMap.compute"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentHashMap.compute

```java
public V compute(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction)
```

Attempts to compute a mapping for the specified key and its
 current mapped value (or `null` if there is no current
 mapping). The entire method invocation is performed atomically.
 The supplied function is invoked exactly once per invocation of
 this method.  Some attempted update operations on this map by
 other threads may be blocked while computation is in progress,
 so the computation should be short and simple.

 

The remapping function must not modify this map during computation.

**参数**

- **key** — key with which the specified value is to be associated
- **remappingFunction** — the function to compute a value

**返回**

- the new value associated with the specified key, or null if none

**异常**

- **NullPointerException** — if the specified key or remappingFunction is null
- **IllegalStateException** — if the computation detectably attempts a recursive update to this map that would otherwise never complete
- **RuntimeException** — or Error if the remappingFunction does so, in which case the mapping is unchanged
