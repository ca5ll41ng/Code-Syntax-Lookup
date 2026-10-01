---
id: "java-en-function-concurrentskiplistmap-containskey"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentSkipListMap.containsKey"
signature: "public boolean containsKey(Object key)"
title: "ConcurrentSkipListMap.containsKey"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentSkipListMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentSkipListMap.containsKey

```java
public boolean containsKey(Object key)
```

Returns `true` if this map contains a mapping for the specified
 key.

**参数**

- **key** — key whose presence in this map is to be tested

**返回**

- `true` if this map contains a mapping for the specified key

**异常**

- **ClassCastException** — if the specified key cannot be compared with the keys currently in the map
- **NullPointerException** — if the specified key is null
