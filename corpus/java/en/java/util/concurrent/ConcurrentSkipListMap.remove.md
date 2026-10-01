---
id: "java-en-function-concurrentskiplistmap-remove"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentSkipListMap.remove"
signature: "public V remove(Object key)"
title: "ConcurrentSkipListMap.remove"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentSkipListMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentSkipListMap.remove

```java
public V remove(Object key)
```

Removes the mapping for the specified key from this map if present.

**参数**

- **key** — key for which mapping should be removed

**返回**

- the previous value associated with the specified key, or `null` if there was no mapping for the key

**异常**

- **ClassCastException** — if the specified key cannot be compared with the keys currently in the map
- **NullPointerException** — if the specified key is null
