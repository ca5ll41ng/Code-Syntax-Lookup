---
id: "java-en-function-concurrenthashmap-reduce"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentHashMap.reduce"
signature: "public <U> U reduce(long parallelismThreshold, BiFunction<? super K, ? super V, ? extends U> transformer, BiFunction<? super U, ? super U, ? extends U> reducer)"
title: "ConcurrentHashMap.reduce"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentHashMap.reduce

```java
public <U> U reduce(long parallelismThreshold, BiFunction<? super K, ? super V, ? extends U> transformer, BiFunction<? super U, ? super U, ? extends U> reducer)
```

Returns the result of accumulating the given `#Bulk bulk` transformation
 of all (key, value) pairs using the given reducer to
 combine values, or null if none.

**参数**

- **parallelismThreshold** — the (estimated) number of elements needed for this operation to be executed in parallel
- **transformer** — a function returning the transformation for an element, or null if there is no transformation (in which case it is not combined)
- **reducer** — a commutative associative combining function
- **the** — return type of the transformer

**返回**

- the result of accumulating the given transformation of all (key, value) pairs

> *Since 1.8*
