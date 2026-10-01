---
id: "java-en-function-concurrentskiplistmap-computeifpresent"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentSkipListMap.computeIfPresent"
signature: "public V computeIfPresent(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction)"
title: "ConcurrentSkipListMap.computeIfPresent"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentSkipListMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentSkipListMap.computeIfPresent

```java
public V computeIfPresent(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction)
```

If the value for the specified key is present, attempts to
 compute a new mapping given the key and its current mapped
 value. The function is NOT guaranteed to be applied
 once atomically.

**参数**

- **key** — key with which a value may be associated
- **remappingFunction** — the function to compute a value

**返回**

- the new value associated with the specified key, or null if none

**异常**

- **NullPointerException** — if the specified key is null or the remappingFunction is null

> *Since 1.8*
