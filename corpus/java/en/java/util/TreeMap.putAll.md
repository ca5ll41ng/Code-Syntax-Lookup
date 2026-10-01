---
id: "java-en-function-treemap-putall"
language: "java"
lang: "en"
category: "function"
name: "TreeMap.putAll"
signature: "public void putAll(Map<? extends K, ? extends V> map)"
title: "TreeMap.putAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TreeMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TreeMap.putAll

```java
public void putAll(Map<? extends K, ? extends V> map)
```

Copies all of the mappings from the specified map to this map.
 These mappings replace any mappings that this map had for any
 of the keys currently in the specified map.

**参数**

- **map** — mappings to be stored in this map

**异常**

- **ClassCastException** — if the class of a key or value in the specified map prevents it from being stored in this map
- **NullPointerException** — if the specified map is null or the specified map contains a null key and this map does not permit null keys
