---
id: "java-en-function-concurrentskiplistmap-replace"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentSkipListMap.replace"
signature: "public boolean replace(K key, V oldValue, V newValue)"
title: "ConcurrentSkipListMap.replace"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentSkipListMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentSkipListMap.replace

```java
public boolean replace(K key, V oldValue, V newValue)
```

{@inheritDoc ConcurrentMap}

**返回**

- {@inheritDoc ConcurrentMap}

**异常**

- **ClassCastException** — if the specified key cannot be compared with the keys currently in the map
- **NullPointerException** — if any of the arguments are null
