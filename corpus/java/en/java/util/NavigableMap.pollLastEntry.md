---
id: "java-en-function-navigablemap-polllastentry"
language: "java"
lang: "en"
category: "function"
name: "NavigableMap.pollLastEntry"
signature: "Map.Entry<K,V> pollLastEntry()"
title: "NavigableMap.pollLastEntry"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/NavigableMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NavigableMap.pollLastEntry

```java
Map.Entry<K,V> pollLastEntry()
```

Removes and returns a key-value mapping associated with
 the greatest key in this map, or `null` if the map is empty
 (optional operation).

**返回**

- the removed last entry of this map, or `null` if this map is empty

**异常**

- **UnsupportedOperationException** — if the `pollLastEntry` operation is not supported by this map
