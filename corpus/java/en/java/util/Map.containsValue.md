---
id: "java-en-function-map-containsvalue"
language: "java"
lang: "en"
category: "function"
name: "Map.containsValue"
signature: "boolean containsValue(Object value)"
title: "Map.containsValue"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Map.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Map.containsValue

```java
boolean containsValue(Object value)
```

Returns `true` if this map maps one or more keys to the
 specified value.  More formally, returns `true` if and only if
 this map contains at least one mapping to a value `v` such that
 `Objects.equals(value, v)`.  This operation
 will probably require time linear in the map size for most
 implementations of the `Map` interface.

**参数**

- **value** — value whose presence in this map is to be tested

**返回**

- `true` if this map maps one or more keys to the specified value

**异常**

- **ClassCastException** — if the value is of an inappropriate type for this map (`#optional-restrictions optional`)
- **NullPointerException** — if the specified value is null and this map does not permit null values (`#optional-restrictions optional`)
