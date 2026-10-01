---
id: "java-en-function-concurrenthashmap-getordefault"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentHashMap.getOrDefault"
signature: "public V getOrDefault(Object key, V defaultValue)"
title: "ConcurrentHashMap.getOrDefault"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentHashMap.getOrDefault

```java
public V getOrDefault(Object key, V defaultValue)
```

Returns the value to which the specified key is mapped, or the
 given default value if this map contains no mapping for the
 key.

**参数**

- **key** — the key whose associated value is to be returned
- **defaultValue** — the value to return if this map contains no mapping for the given key

**返回**

- the mapping for the key, if present; else the default value

**异常**

- **NullPointerException** — if the specified key is null
