---
id: "java-en-function-concurrenthashmap-putifabsent"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentHashMap.putIfAbsent"
signature: "public V putIfAbsent(K key, V value)"
title: "ConcurrentHashMap.putIfAbsent"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentHashMap.putIfAbsent

```java
public V putIfAbsent(K key, V value)
```

{@inheritDoc ConcurrentMap}

**返回**

- the previous value associated with the specified key, or `null` if there was no mapping for the key

**异常**

- **NullPointerException** — if the specified key or value is null
