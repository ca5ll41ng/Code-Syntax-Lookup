---
id: "java-en-function-navigablemap-ceilingkey"
language: "java"
lang: "en"
category: "function"
name: "NavigableMap.ceilingKey"
signature: "K ceilingKey(K key)"
title: "NavigableMap.ceilingKey"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/NavigableMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NavigableMap.ceilingKey

```java
K ceilingKey(K key)
```

Returns the least key greater than or equal to the given key,
 or `null` if there is no such key.

**参数**

- **key** — the key

**返回**

- the least key greater than or equal to `key`, or `null` if there is no such key

**异常**

- **ClassCastException** — if the specified key cannot be compared with the keys currently in the map
- **NullPointerException** — if the specified key is null and this map does not permit null keys
