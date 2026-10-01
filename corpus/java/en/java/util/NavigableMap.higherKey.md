---
id: "java-en-function-navigablemap-higherkey"
language: "java"
lang: "en"
category: "function"
name: "NavigableMap.higherKey"
signature: "K higherKey(K key)"
title: "NavigableMap.higherKey"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/NavigableMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NavigableMap.higherKey

```java
K higherKey(K key)
```

Returns the least key strictly greater than the given key, or
 `null` if there is no such key.

**参数**

- **key** — the key

**返回**

- the least key greater than `key`, or `null` if there is no such key

**异常**

- **ClassCastException** — if the specified key cannot be compared with the keys currently in the map
- **NullPointerException** — if the specified key is null and this map does not permit null keys
