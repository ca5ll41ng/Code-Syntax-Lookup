---
id: "java-en-function-concurrenthashmap-containskey"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentHashMap.containsKey"
signature: "public boolean containsKey(Object key)"
title: "ConcurrentHashMap.containsKey"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentHashMap.containsKey

```java
public boolean containsKey(Object key)
```

Tests if the specified object is a key in this table.

**参数**

- **key** — possible key

**返回**

- `true` if and only if the specified object is a key in this table, as determined by the `equals` method; `false` otherwise

**异常**

- **NullPointerException** — if the specified key is null
