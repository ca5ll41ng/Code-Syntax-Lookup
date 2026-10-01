---
id: "java-en-function-concurrentskiplistmap-containsvalue"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentSkipListMap.containsValue"
signature: "public boolean containsValue(Object value)"
title: "ConcurrentSkipListMap.containsValue"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentSkipListMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentSkipListMap.containsValue

```java
public boolean containsValue(Object value)
```

Returns `true` if this map maps one or more keys to the
 specified value.  This operation requires time linear in the
 map size. Additionally, it is possible for the map to change
 during execution of this method, in which case the returned
 result may be inaccurate.

**参数**

- **value** — value whose presence in this map is to be tested

**返回**

- `true` if a mapping to `value` exists; `false` otherwise

**异常**

- **NullPointerException** — if the specified value is null
