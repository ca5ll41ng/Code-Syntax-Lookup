---
id: "java-en-function-enummap-entryset"
language: "java"
lang: "en"
category: "function"
name: "EnumMap.entrySet"
signature: "public Set<Map.Entry<K,V>> entrySet()"
title: "EnumMap.entrySet"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/EnumMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EnumMap.entrySet

```java
public Set<Map.Entry<K,V>> entrySet()
```

Returns a `Set` view of the mappings contained in this map.
 The returned set obeys the general contract outlined in
 `keySet`.  The set's iterator will return the
 mappings in the order their keys appear in map, which is their
 natural order (the order in which the enum constants are declared).

**返回**

- a set view of the mappings contained in this enum map
