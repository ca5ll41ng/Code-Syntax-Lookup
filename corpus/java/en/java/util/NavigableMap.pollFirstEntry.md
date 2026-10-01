---
id: "java-en-function-navigablemap-pollfirstentry"
language: "java"
lang: "en"
category: "function"
name: "NavigableMap.pollFirstEntry"
signature: "Map.Entry<K,V> pollFirstEntry()"
title: "NavigableMap.pollFirstEntry"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/NavigableMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NavigableMap.pollFirstEntry

```java
Map.Entry<K,V> pollFirstEntry()
```

Removes and returns a key-value mapping associated with
 the least key in this map, or `null` if the map is empty
 (optional operation).

**返回**

- the removed first entry of this map, or `null` if this map is empty

**异常**

- **UnsupportedOperationException** — if the `pollFirstEntry` operation is not supported by this map
