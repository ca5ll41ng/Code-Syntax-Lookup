---
id: "java-en-function-concurrenthashmap-searchentries"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentHashMap.searchEntries"
signature: "public <U> U searchEntries(long parallelismThreshold, Function<Map.Entry<K,V>, ? extends U> searchFunction)"
title: "ConcurrentHashMap.searchEntries"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentHashMap.searchEntries

```java
public <U> U searchEntries(long parallelismThreshold, Function<Map.Entry<K,V>, ? extends U> searchFunction)
```

Returns a non-null result from `#Bulk bulk` applying the given search
 function on each entry, or null if none.  Upon success,
 further element processing is suppressed and the results of
 any other parallel invocations of the search function are
 ignored.

**参数**

- **parallelismThreshold** — the (estimated) number of elements needed for this operation to be executed in parallel
- **searchFunction** — a function returning a non-null result on success, else null
- **the** — return type of the search function

**返回**

- a non-null result from applying the given search function on each entry, or null if none

> *Since 1.8*
