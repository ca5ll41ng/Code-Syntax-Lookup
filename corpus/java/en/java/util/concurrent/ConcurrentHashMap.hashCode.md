---
id: "java-en-function-concurrenthashmap-hashcode"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentHashMap.hashCode"
signature: "public int hashCode()"
title: "ConcurrentHashMap.hashCode"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentHashMap.hashCode

```java
public int hashCode()
```

Returns the hash code value for this `Map`, i.e.,
 the sum of, for each key-value pair in the map,
 `key.hashCode() ^ value.hashCode()`.

**返回**

- the hash code value for this map
