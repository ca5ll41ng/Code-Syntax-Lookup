---
id: "java-en-function-concurrenthashmap-contains"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentHashMap.contains"
signature: "public boolean contains(Object value)"
title: "ConcurrentHashMap.contains"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentHashMap.contains

```java
public boolean contains(Object value)
```

Tests if some key maps into the specified value in this table.

 

Note that this method is identical in functionality to
 `containsValue`, and exists solely to ensure
 full compatibility with class `java.util.Hashtable`,
 which supported this method prior to introduction of the
 Java Collections Framework.

**参数**

- **value** — a value to search for

**返回**

- `true` if and only if some key maps to the `value` argument in this table as determined by the `equals` method; `false` otherwise

**异常**

- **NullPointerException** — if the specified value is null
