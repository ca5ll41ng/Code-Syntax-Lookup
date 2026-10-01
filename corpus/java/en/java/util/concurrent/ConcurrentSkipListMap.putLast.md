---
id: "java-en-function-concurrentskiplistmap-putlast"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentSkipListMap.putLast"
signature: "public V putLast(K k, V v)"
title: "ConcurrentSkipListMap.putLast"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentSkipListMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentSkipListMap.putLast

```java
public V putLast(K k, V v)
```

Throws `UnsupportedOperationException`. The encounter order induced by this
 map's comparison method determines the position of mappings, so explicit positioning
 is not supported.

**异常**

- **UnsupportedOperationException** — always

> *Since 21*
