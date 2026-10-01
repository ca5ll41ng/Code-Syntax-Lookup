---
id: "java-en-function-concurrentskiplistmap-submap"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentSkipListMap.subMap"
signature: "public ConcurrentNavigableMap<K,V> subMap(K fromKey, boolean fromInclusive, K toKey, boolean toInclusive)"
title: "ConcurrentSkipListMap.subMap"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentSkipListMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentSkipListMap.subMap

```java
public ConcurrentNavigableMap<K,V> subMap(K fromKey, boolean fromInclusive, K toKey, boolean toInclusive)
```

**异常**

- **ClassCastException** — {@inheritDoc}
- **NullPointerException** — if `fromKey` or `toKey` is null
- **IllegalArgumentException** — {@inheritDoc}
