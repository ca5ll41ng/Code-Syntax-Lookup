---
id: "java-en-function-concurrenthashmap-reduceentries"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentHashMap.reduceEntries"
signature: "public Map.Entry<K,V> reduceEntries(long parallelismThreshold, BiFunction<Map.Entry<K,V>, Map.Entry<K,V>, ? extends Map.Entry<K,V>> reducer)"
title: "ConcurrentHashMap.reduceEntries"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentHashMap.reduceEntries

```java
public Map.Entry<K,V> reduceEntries(long parallelismThreshold, BiFunction<Map.Entry<K,V>, Map.Entry<K,V>, ? extends Map.Entry<K,V>> reducer)
```

Returns the result of `#Bulk bulk` accumulating all entries using the
 given reducer to combine values, or null if none.

**参数**

- **parallelismThreshold** — the (estimated) number of elements needed for this operation to be executed in parallel
- **reducer** — a commutative associative combining function

**返回**

- the result of accumulating all entries

> *Since 1.8*
