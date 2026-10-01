---
id: "java-en-function-concurrenthashmap-remove"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentHashMap.remove"
signature: "public V remove(Object key)"
title: "ConcurrentHashMap.remove"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentHashMap.remove

```java
public V remove(Object key)
```

Removes the key (and its corresponding value) from this map.
 This method does nothing if the key is not in the map.

**参数**

- **key** — the key that needs to be removed

**返回**

- the previous value associated with `key`, or `null` if there was no mapping for `key`

**异常**

- **NullPointerException** — if the specified key is null
