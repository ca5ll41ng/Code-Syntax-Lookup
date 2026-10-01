---
id: "java-en-function-concurrentskiplistmap-headmap"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentSkipListMap.headMap"
signature: "public ConcurrentNavigableMap<K,V> headMap(K toKey, boolean inclusive)"
title: "ConcurrentSkipListMap.headMap"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentSkipListMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentSkipListMap.headMap

```java
public ConcurrentNavigableMap<K,V> headMap(K toKey, boolean inclusive)
```

**异常**

- **ClassCastException** — {@inheritDoc}
- **NullPointerException** — if `toKey` is null
- **IllegalArgumentException** — {@inheritDoc}
