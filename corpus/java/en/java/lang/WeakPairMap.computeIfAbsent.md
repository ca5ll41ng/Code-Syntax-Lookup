---
id: "java-en-function-weakpairmap-computeifabsent"
language: "java"
lang: "en"
category: "function"
name: "WeakPairMap.computeIfAbsent"
signature: "public V computeIfAbsent(K1 k1, K2 k2, BiFunction<? super K1, ? super K2, ? extends V> mappingFunction)"
title: "WeakPairMap.computeIfAbsent"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/WeakPairMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WeakPairMap.computeIfAbsent

```java
public V computeIfAbsent(K1 k1, K2 k2, BiFunction<? super K1, ? super K2, ? extends V> mappingFunction)
```

If the specified key pair is not already associated with a value,
 attempts to compute its value using the given mapping function
 and enters it into this WeakPairMap unless `null`. The entire
 method invocation is performed atomically, so the function is
 applied at most once per key pair. Some attempted update operations
 on this WeakPairMap by other threads may be blocked while computation
 is in progress, so the computation should be short and simple,
 and must not attempt to update any other mappings of this WeakPairMap.

**参数**

- **k1** — the 1st of the pair of keys with which the computed value is to be associated
- **k2** — the 2nd of the pair of keys with which the computed value is to be associated
- **mappingFunction** — the function to compute a value

**返回**

- the current (existing or computed) value associated with the specified key pair, or null if the computed value is null

**异常**

- **NullPointerException** — if any of the specified keys or mappingFunction is null
- **IllegalStateException** — if the computation detectably attempts a recursive update to this map that would otherwise never complete
- **RuntimeException** — or Error if the mappingFunction does so, in which case the mapping is left unestablished
