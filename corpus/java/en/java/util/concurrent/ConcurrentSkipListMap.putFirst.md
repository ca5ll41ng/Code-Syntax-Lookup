---
id: "java-en-function-concurrentskiplistmap-putfirst"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentSkipListMap.putFirst"
signature: "public V putFirst(K k, V v)"
title: "ConcurrentSkipListMap.putFirst"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentSkipListMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentSkipListMap.putFirst

```java
public V putFirst(K k, V v)
```

Throws `UnsupportedOperationException`. The encounter order induced by this
 map's comparison method determines the position of mappings, so explicit positioning
 is not supported.

**异常**

- **UnsupportedOperationException** — always

> *Since 21*
