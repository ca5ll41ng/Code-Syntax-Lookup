---
id: "java-en-function-linkedhashmap-newlinkedhashmap"
language: "java"
lang: "en"
category: "function"
name: "LinkedHashMap.newLinkedHashMap"
signature: "public static <K, V> LinkedHashMap<K, V> newLinkedHashMap(int numMappings)"
title: "LinkedHashMap.newLinkedHashMap"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/LinkedHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LinkedHashMap.newLinkedHashMap

```java
public static <K, V> LinkedHashMap<K, V> newLinkedHashMap(int numMappings)
```

Creates a new, empty, insertion-ordered LinkedHashMap suitable for the expected number of mappings.
 The returned map uses the default load factor of 0.75, and its initial capacity is
 generally large enough so that the expected number of mappings can be added
 without resizing the map.

**参数**

- **numMappings** — the expected number of mappings
- **the** — type of keys maintained by the new map
- **the** — type of mapped values

**返回**

- the newly created map

**异常**

- **IllegalArgumentException** — if numMappings is negative

> *Since 19*
