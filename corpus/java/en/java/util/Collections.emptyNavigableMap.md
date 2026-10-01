---
id: "java-en-function-collections-emptynavigablemap"
language: "java"
lang: "en"
category: "function"
name: "Collections.emptyNavigableMap"
signature: "public static final <K,V> NavigableMap<K,V> emptyNavigableMap()"
title: "Collections.emptyNavigableMap"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.emptyNavigableMap

```java
public static final <K,V> NavigableMap<K,V> emptyNavigableMap()
```

Returns an empty navigable map (immutable).  This map is serializable.

 

This example illustrates the type-safe way to obtain an empty map:
 
```
 `NavigableMap s = Collections.emptyNavigableMap();
 `
```

 `NavigableMap` object for each call.

**参数**

- **the** — class of the map keys
- **the** — class of the map values

**返回**

- an empty navigable map

> *Since 1.8*
