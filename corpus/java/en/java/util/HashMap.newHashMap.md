---
id: "java-en-function-hashmap-newhashmap"
language: "java"
lang: "en"
category: "function"
name: "HashMap.newHashMap"
signature: "public static <K, V> HashMap<K, V> newHashMap(int numMappings)"
title: "HashMap.newHashMap"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HashMap.newHashMap

```java
public static <K, V> HashMap<K, V> newHashMap(int numMappings)
```

Creates a new, empty HashMap suitable for the expected number of mappings.
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
