---
id: "java-en-function-concurrenthashmap-computeifpresent"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentHashMap.computeIfPresent"
signature: "public V computeIfPresent(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction)"
title: "ConcurrentHashMap.computeIfPresent"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentHashMap.computeIfPresent

```java
public V computeIfPresent(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction)
```

If the value for the specified key is present, attempts to
 compute a new mapping given the key and its current mapped
 value.  The entire method invocation is performed atomically.
 The supplied function is invoked exactly once per invocation of
 this method if the key is present, else not at all.  Some
 attempted update operations on this map by other threads may be
 blocked while computation is in progress, so the computation
 should be short and simple.

 

The remapping function must not modify this map during computation.

**参数**

- **key** — key with which a value may be associated
- **remappingFunction** — the function to compute a value

**返回**

- the new value associated with the specified key, or null if none

**异常**

- **NullPointerException** — if the specified key or remappingFunction is null
- **IllegalStateException** — if the computation detectably attempts a recursive update to this map that would otherwise never complete
- **RuntimeException** — or Error if the remappingFunction does so, in which case the mapping is unchanged
