---
id: "java-en-function-treemap-submap"
language: "java"
lang: "en"
category: "function"
name: "TreeMap.subMap"
signature: "public NavigableMap<K,V> subMap(K fromKey, boolean fromInclusive, K toKey, boolean toInclusive)"
title: "TreeMap.subMap"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TreeMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TreeMap.subMap

```java
public NavigableMap<K,V> subMap(K fromKey, boolean fromInclusive, K toKey, boolean toInclusive)
```

**异常**

- **ClassCastException** — {@inheritDoc}
- **NullPointerException** — if `fromKey` or `toKey` is null and this map uses natural ordering, or its comparator does not permit null keys
- **IllegalArgumentException** — {@inheritDoc}

> *Since 1.6*
