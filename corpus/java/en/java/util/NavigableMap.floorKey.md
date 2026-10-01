---
id: "java-en-function-navigablemap-floorkey"
language: "java"
lang: "en"
category: "function"
name: "NavigableMap.floorKey"
signature: "K floorKey(K key)"
title: "NavigableMap.floorKey"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/NavigableMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NavigableMap.floorKey

```java
K floorKey(K key)
```

Returns the greatest key less than or equal to the given key,
 or `null` if there is no such key.

**参数**

- **key** — the key

**返回**

- the greatest key less than or equal to `key`, or `null` if there is no such key

**异常**

- **ClassCastException** — if the specified key cannot be compared with the keys currently in the map
- **NullPointerException** — if the specified key is null and this map does not permit null keys
