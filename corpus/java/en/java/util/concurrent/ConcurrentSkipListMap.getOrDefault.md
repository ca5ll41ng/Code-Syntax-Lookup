---
id: "java-en-function-concurrentskiplistmap-getordefault"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentSkipListMap.getOrDefault"
signature: "public V getOrDefault(Object key, V defaultValue)"
title: "ConcurrentSkipListMap.getOrDefault"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentSkipListMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentSkipListMap.getOrDefault

```java
public V getOrDefault(Object key, V defaultValue)
```

Returns the value to which the specified key is mapped,
 or the given defaultValue if this map contains no mapping for the key.

**参数**

- **key** — the key
- **defaultValue** — the value to return if this map contains no mapping for the given key

**返回**

- the mapping for the key, if present; else the defaultValue

**异常**

- **NullPointerException** — if the specified key is null

> *Since 1.8*
