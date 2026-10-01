---
id: "java-en-function-concurrentskiplistmap-computeifabsent"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentSkipListMap.computeIfAbsent"
signature: "public V computeIfAbsent(K key, Function<? super K, ? extends V> mappingFunction)"
title: "ConcurrentSkipListMap.computeIfAbsent"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentSkipListMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentSkipListMap.computeIfAbsent

```java
public V computeIfAbsent(K key, Function<? super K, ? extends V> mappingFunction)
```

If the specified key is not already associated with a value,
 attempts to compute its value using the given mapping function
 and enters it into this map unless `null`.  The function
 is NOT guaranteed to be applied once atomically only
 if the value is not present.

**参数**

- **key** — key with which the specified value is to be associated
- **mappingFunction** — the function to compute a value

**返回**

- the current (existing or computed) value associated with the specified key, or null if the computed value is null

**异常**

- **NullPointerException** — if the specified key is null or the mappingFunction is null

> *Since 1.8*
