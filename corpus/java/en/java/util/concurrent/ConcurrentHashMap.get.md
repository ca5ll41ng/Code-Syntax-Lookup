---
id: "java-en-function-concurrenthashmap-get"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentHashMap.get"
signature: "public V get(Object key)"
title: "ConcurrentHashMap.get"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentHashMap.get

```java
public V get(Object key)
```

Returns the value to which the specified key is mapped,
 or `null` if this map contains no mapping for the key.

 

More formally, if this map contains a mapping from a key
 `k` to a value `v` such that `key.equals(k)`,
 then this method returns `v`; otherwise it returns
 `null`.  (There can be at most one such mapping.)

**异常**

- **NullPointerException** — if the specified key is null
