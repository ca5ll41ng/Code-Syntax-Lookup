---
id: "java-en-function-concurrenthashmap-containsvalue"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentHashMap.containsValue"
signature: "public boolean containsValue(Object value)"
title: "ConcurrentHashMap.containsValue"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentHashMap.containsValue

```java
public boolean containsValue(Object value)
```

Returns `true` if this map maps one or more keys to the
 specified value. Note: This method may require a full traversal
 of the map, and is much slower than method `containsKey`.

**参数**

- **value** — value whose presence in this map is to be tested

**返回**

- `true` if this map maps one or more keys to the specified value

**异常**

- **NullPointerException** — if the specified value is null
