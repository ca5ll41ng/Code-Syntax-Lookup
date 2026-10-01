---
id: "java-en-function-enummap-values"
language: "java"
lang: "en"
category: "function"
name: "EnumMap.values"
signature: "public Collection<V> values()"
title: "EnumMap.values"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/EnumMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EnumMap.values

```java
public Collection<V> values()
```

Returns a `Collection` view of the values contained in this map.
 The returned collection obeys the general contract outlined in
 `values`.  The collection's iterator will return the
 values in the order their corresponding keys appear in map,
 which is their natural order (the order in which the enum constants
 are declared).

**返回**

- a collection view of the values contained in this map
