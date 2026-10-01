---
id: "java-en-function-concurrentskiplistmap-put"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentSkipListMap.put"
signature: "public V put(K key, V value)"
title: "ConcurrentSkipListMap.put"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentSkipListMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentSkipListMap.put

```java
public V put(K key, V value)
```

Associates the specified value with the specified key in this map.
 If the map previously contained a mapping for the key, the old
 value is replaced.

**参数**

- **key** — key with which the specified value is to be associated
- **value** — value to be associated with the specified key

**返回**

- the previous value associated with the specified key, or `null` if there was no mapping for the key

**异常**

- **ClassCastException** — if the specified key cannot be compared with the keys currently in the map
- **NullPointerException** — if the specified key or value is null
