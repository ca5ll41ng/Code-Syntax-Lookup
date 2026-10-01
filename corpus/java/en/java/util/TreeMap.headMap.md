---
id: "java-en-function-treemap-headmap"
language: "java"
lang: "en"
category: "function"
name: "TreeMap.headMap"
signature: "public NavigableMap<K,V> headMap(K toKey, boolean inclusive)"
title: "TreeMap.headMap"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TreeMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TreeMap.headMap

```java
public NavigableMap<K,V> headMap(K toKey, boolean inclusive)
```

**异常**

- **ClassCastException** — {@inheritDoc}
- **NullPointerException** — if `toKey` is null and this map uses natural ordering, or its comparator does not permit null keys
- **IllegalArgumentException** — {@inheritDoc}

> *Since 1.6*
