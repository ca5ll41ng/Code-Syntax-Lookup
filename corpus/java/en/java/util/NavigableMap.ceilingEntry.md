---
id: "java-en-function-navigablemap-ceilingentry"
language: "java"
lang: "en"
category: "function"
name: "NavigableMap.ceilingEntry"
signature: "Map.Entry<K,V> ceilingEntry(K key)"
title: "NavigableMap.ceilingEntry"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/NavigableMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NavigableMap.ceilingEntry

```java
Map.Entry<K,V> ceilingEntry(K key)
```

Returns a key-value mapping associated with the least key
 greater than or equal to the given key, or `null` if
 there is no such key.

**参数**

- **key** — the key

**返回**

- an entry with the least key greater than or equal to `key`, or `null` if there is no such key

**异常**

- **ClassCastException** — if the specified key cannot be compared with the keys currently in the map
- **NullPointerException** — if the specified key is null and this map does not permit null keys
