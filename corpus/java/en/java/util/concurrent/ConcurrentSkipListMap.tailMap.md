---
id: "java-en-function-concurrentskiplistmap-tailmap"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentSkipListMap.tailMap"
signature: "public ConcurrentNavigableMap<K,V> tailMap(K fromKey, boolean inclusive)"
title: "ConcurrentSkipListMap.tailMap"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentSkipListMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentSkipListMap.tailMap

```java
public ConcurrentNavigableMap<K,V> tailMap(K fromKey, boolean inclusive)
```

**异常**

- **ClassCastException** — {@inheritDoc}
- **NullPointerException** — if `fromKey` is null
- **IllegalArgumentException** — {@inheritDoc}
