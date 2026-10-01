---
id: "java-en-function-concurrenthashmap-reducevalues"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentHashMap.reduceValues"
signature: "public V reduceValues(long parallelismThreshold, BiFunction<? super V, ? super V, ? extends V> reducer)"
title: "ConcurrentHashMap.reduceValues"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentHashMap.reduceValues

```java
public V reduceValues(long parallelismThreshold, BiFunction<? super V, ? super V, ? extends V> reducer)
```

Returns the result of `#Bulk bulk` accumulating all values using the
 given reducer to combine values, or null if none.

**参数**

- **parallelismThreshold** — the (estimated) number of elements needed for this operation to be executed in parallel
- **reducer** — a commutative associative combining function

**返回**

- the result of accumulating all values

> *Since 1.8*
