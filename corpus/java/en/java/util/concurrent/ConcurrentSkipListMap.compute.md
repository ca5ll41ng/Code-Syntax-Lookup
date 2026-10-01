---
id: "java-en-function-concurrentskiplistmap-compute"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentSkipListMap.compute"
signature: "public V compute(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction)"
title: "ConcurrentSkipListMap.compute"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentSkipListMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentSkipListMap.compute

```java
public V compute(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction)
```

Attempts to compute a mapping for the specified key and its
 current mapped value (or `null` if there is no current
 mapping). The function is NOT guaranteed to be applied
 once atomically.

**参数**

- **key** — key with which the specified value is to be associated
- **remappingFunction** — the function to compute a value

**返回**

- the new value associated with the specified key, or null if none

**异常**

- **NullPointerException** — if the specified key is null or the remappingFunction is null

> *Since 1.8*
