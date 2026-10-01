---
id: "java-en-function-treemap-tailmap"
language: "java"
lang: "en"
category: "function"
name: "TreeMap.tailMap"
signature: "public NavigableMap<K,V> tailMap(K fromKey, boolean inclusive)"
title: "TreeMap.tailMap"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TreeMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TreeMap.tailMap

```java
public NavigableMap<K,V> tailMap(K fromKey, boolean inclusive)
```

**异常**

- **ClassCastException** — {@inheritDoc}
- **NullPointerException** — if `fromKey` is null and this map uses natural ordering, or its comparator does not permit null keys
- **IllegalArgumentException** — {@inheritDoc}

> *Since 1.6*
