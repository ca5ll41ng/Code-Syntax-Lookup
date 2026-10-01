---
id: "java-en-function-concurrenthashmap-equals"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentHashMap.equals"
signature: "public boolean equals(Object o)"
title: "ConcurrentHashMap.equals"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentHashMap.equals

```java
public boolean equals(Object o)
```

Compares the specified object with this map for equality.
 Returns `true` if the given object is a map with the same
 mappings as this map.  This operation may return misleading
 results if either map is concurrently modified during execution
 of this method.

**参数**

- **o** — object to be compared for equality with this map

**返回**

- `true` if the specified object is equal to this map
