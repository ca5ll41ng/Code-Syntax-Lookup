---
id: "java-en-function-treemap-containsvalue"
language: "java"
lang: "en"
category: "function"
name: "TreeMap.containsValue"
signature: "public boolean containsValue(Object value)"
title: "TreeMap.containsValue"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TreeMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TreeMap.containsValue

```java
public boolean containsValue(Object value)
```

Returns `true` if this map maps one or more keys to the
 specified value.  More formally, returns `true` if and only if
 this map contains at least one mapping to a value `v` such
 that `(value==null ? v==null : value.equals(v))`.  This
 operation will probably require time linear in the map size for
 most implementations.

**参数**

- **value** — value whose presence in this map is to be tested

**返回**

- `true` if a mapping to `value` exists; `false` otherwise

> *Since 1.2*
