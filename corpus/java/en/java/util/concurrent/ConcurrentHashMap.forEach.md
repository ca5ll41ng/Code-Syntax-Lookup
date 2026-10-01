---
id: "java-en-function-concurrenthashmap-foreach"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentHashMap.forEach"
signature: "public void forEach(long parallelismThreshold, BiConsumer<? super K,? super V> action)"
title: "ConcurrentHashMap.forEach"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentHashMap.forEach

```java
public void forEach(long parallelismThreshold, BiConsumer<? super K,? super V> action)
```

Performs the given `#Bulk bulk` action for each (key, value).

**参数**

- **parallelismThreshold** — the (estimated) number of elements needed for this operation to be executed in parallel
- **action** — the action

> *Since 1.8*
