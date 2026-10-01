---
id: "java-en-function-concurrenthashmap-reducekeys"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentHashMap.reduceKeys"
signature: "public K reduceKeys(long parallelismThreshold, BiFunction<? super K, ? super K, ? extends K> reducer)"
title: "ConcurrentHashMap.reduceKeys"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentHashMap.reduceKeys

```java
public K reduceKeys(long parallelismThreshold, BiFunction<? super K, ? super K, ? extends K> reducer)
```

Returns the result of `#Bulk bulk` accumulating all keys using the given
 reducer to combine values, or null if none.

**参数**

- **parallelismThreshold** — the (estimated) number of elements needed for this operation to be executed in parallel
- **reducer** — a commutative associative combining function

**返回**

- the result of accumulating all keys using the given reducer to combine values, or null if none

> *Since 1.8*
