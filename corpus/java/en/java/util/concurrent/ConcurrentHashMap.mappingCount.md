---
id: "java-en-function-concurrenthashmap-mappingcount"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentHashMap.mappingCount"
signature: "public long mappingCount()"
title: "ConcurrentHashMap.mappingCount"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentHashMap.mappingCount

```java
public long mappingCount()
```

Returns the number of mappings. This method should be used
 instead of `size` because a ConcurrentHashMap may
 contain more mappings than can be represented as an int. The
 value returned is an estimate; the actual count may differ if
 there are concurrent insertions or removals.

**返回**

- the number of mappings

> *Since 1.8*
