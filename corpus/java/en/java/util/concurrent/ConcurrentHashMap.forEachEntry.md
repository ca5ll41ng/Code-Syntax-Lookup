---
id: "java-en-function-concurrenthashmap-foreachentry"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentHashMap.forEachEntry"
signature: "public void forEachEntry(long parallelismThreshold, Consumer<? super Map.Entry<K,V>> action)"
title: "ConcurrentHashMap.forEachEntry"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentHashMap.forEachEntry

```java
public void forEachEntry(long parallelismThreshold, Consumer<? super Map.Entry<K,V>> action)
```

Performs the given `#Bulk bulk` action for each entry.

**参数**

- **parallelismThreshold** — the (estimated) number of elements needed for this operation to be executed in parallel
- **action** — the action

> *Since 1.8*
