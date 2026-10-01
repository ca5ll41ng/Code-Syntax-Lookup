---
id: "java-en-function-concurrenthashmap-reduceentriestodouble"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentHashMap.reduceEntriesToDouble"
signature: "public double reduceEntriesToDouble(long parallelismThreshold, ToDoubleFunction<Map.Entry<K,V>> transformer, double basis, DoubleBinaryOperator reducer)"
title: "ConcurrentHashMap.reduceEntriesToDouble"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentHashMap.reduceEntriesToDouble

```java
public double reduceEntriesToDouble(long parallelismThreshold, ToDoubleFunction<Map.Entry<K,V>> transformer, double basis, DoubleBinaryOperator reducer)
```

Returns the result of `#Bulk bulk` accumulating the given transformation
 of all entries using the given reducer to combine values,
 and the given basis as an identity value.

**参数**

- **parallelismThreshold** — the (estimated) number of elements needed for this operation to be executed in parallel
- **transformer** — a function returning the transformation for an element
- **basis** — the identity (initial default value) for the reduction
- **reducer** — a commutative associative combining function

**返回**

- the result of accumulating the given transformation of all entries

> *Since 1.8*
