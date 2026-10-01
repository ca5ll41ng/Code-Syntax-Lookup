---
id: "java-en-function-concurrentskiplistmap-putifabsent"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentSkipListMap.putIfAbsent"
signature: "public V putIfAbsent(K key, V value)"
title: "ConcurrentSkipListMap.putIfAbsent"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentSkipListMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentSkipListMap.putIfAbsent

```java
public V putIfAbsent(K key, V value)
```

{@inheritDoc ConcurrentMap}

**返回**

- the previous value associated with the specified key, or `null` if there was no mapping for the key

**异常**

- **ClassCastException** — if the specified key cannot be compared with the keys currently in the map
- **NullPointerException** — if the specified key or value is null
