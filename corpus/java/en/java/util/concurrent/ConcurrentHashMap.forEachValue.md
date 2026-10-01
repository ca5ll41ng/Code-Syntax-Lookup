---
id: "java-en-function-concurrenthashmap-foreachvalue"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentHashMap.forEachValue"
signature: "public void forEachValue(long parallelismThreshold, Consumer<? super V> action)"
title: "ConcurrentHashMap.forEachValue"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentHashMap.forEachValue

```java
public void forEachValue(long parallelismThreshold, Consumer<? super V> action)
```

Performs the given `#Bulk bulk` action for each value.

**参数**

- **parallelismThreshold** — the (estimated) number of elements needed for this operation to be executed in parallel
- **action** — the action

> *Since 1.8*
