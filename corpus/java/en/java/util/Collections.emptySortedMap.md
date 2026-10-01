---
id: "java-en-function-collections-emptysortedmap"
language: "java"
lang: "en"
category: "function"
name: "Collections.emptySortedMap"
signature: "public static final <K,V> SortedMap<K,V> emptySortedMap()"
title: "Collections.emptySortedMap"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.emptySortedMap

```java
public static final <K,V> SortedMap<K,V> emptySortedMap()
```

Returns an empty sorted map (immutable).  This map is serializable.

 

This example illustrates the type-safe way to obtain an empty map:
 
```
 `SortedMap s = Collections.emptySortedMap();
 `
```

 `SortedMap` object for each call.

**参数**

- **the** — class of the map keys
- **the** — class of the map values

**返回**

- an empty sorted map

> *Since 1.8*
