---
id: "java-en-function-concurrenthashmap-foreachkey"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentHashMap.forEachKey"
signature: "public void forEachKey(long parallelismThreshold, Consumer<? super K> action)"
title: "ConcurrentHashMap.forEachKey"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentHashMap.forEachKey

```java
public void forEachKey(long parallelismThreshold, Consumer<? super K> action)
```

Performs the given `#Bulk bulk` action for each key.

**参数**

- **parallelismThreshold** — the (estimated) number of elements needed for this operation to be executed in parallel
- **action** — the action

> *Since 1.8*
