---
id: "java-en-function-concurrentskiplistmap-get"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentSkipListMap.get"
signature: "public V get(Object key)"
title: "ConcurrentSkipListMap.get"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentSkipListMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentSkipListMap.get

```java
public V get(Object key)
```

Returns the value to which the specified key is mapped,
 or `null` if this map contains no mapping for the key.

 

More formally, if this map contains a mapping from a key
 `k` to a value `v` such that `key` compares
 equal to `k` according to the map's ordering, then this
 method returns `v`; otherwise it returns `null`.
 (There can be at most one such mapping.)

**异常**

- **ClassCastException** — if the specified key cannot be compared with the keys currently in the map
- **NullPointerException** — if the specified key is null
