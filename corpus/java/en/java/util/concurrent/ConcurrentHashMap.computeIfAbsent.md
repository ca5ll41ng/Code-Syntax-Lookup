---
id: "java-en-function-concurrenthashmap-computeifabsent"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentHashMap.computeIfAbsent"
signature: "public V computeIfAbsent(K key, Function<? super K, ? extends V> mappingFunction)"
title: "ConcurrentHashMap.computeIfAbsent"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentHashMap.computeIfAbsent

```java
public V computeIfAbsent(K key, Function<? super K, ? extends V> mappingFunction)
```

If the specified key is not already associated with a value,
 attempts to compute its value using the given mapping function
 and enters it into this map unless `null`.  The entire
 method invocation is performed atomically.  The supplied
 function is invoked exactly once per invocation of this method
 if the key is absent, else not at all.  Some attempted update
 operations on this map by other threads may be blocked while
 computation is in progress, so the computation should be short
 and simple.

 

The mapping function must not modify this map during computation.

**参数**

- **key** — key with which the specified value is to be associated
- **mappingFunction** — the function to compute a value

**返回**

- the current (existing or computed) value associated with the specified key, or null if the computed value is null

**异常**

- **NullPointerException** — if the specified key or mappingFunction is null
- **IllegalStateException** — if the computation detectably attempts a recursive update to this map that would otherwise never complete
- **RuntimeException** — or Error if the mappingFunction does so, in which case the mapping is left unestablished
