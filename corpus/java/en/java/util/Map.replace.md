---
id: "java-en-function-map-replace"
language: "java"
lang: "en"
category: "function"
name: "Map.replace"
signature: "default boolean replace(K key, V oldValue, V newValue)"
title: "Map.replace"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Map.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Map.replace

```java
default boolean replace(K key, V oldValue, V newValue)
```

Replaces the entry for the specified key only if currently
 mapped to the specified value (optional operation).

 The default implementation is equivalent to, for this `map`:

 
```
 `if (map.containsKey(key) && Objects.equals(map.get(key), oldValue)) {
     map.put(key, newValue);
     return true;
 ` else
     return false;
 }
```

 The default implementation does not throw NullPointerException
 for maps that do not support null values if oldValue is null unless
 newValue is also null.

 

The default implementation makes no guarantees about synchronization
 or atomicity properties of this method. Any implementation providing
 atomicity guarantees must override this method and document its
 concurrency properties.

**参数**

- **key** — key with which the specified value is associated
- **oldValue** — value expected to be associated with the specified key
- **newValue** — value to be associated with the specified key

**返回**

- `true` if the value was replaced

**异常**

- **UnsupportedOperationException** — if the `replace` operation is not supported by this map (`#optional-restrictions optional`)
- **ClassCastException** — if the class of a specified key or value prevents it from being stored in this map
- **NullPointerException** — if a specified key or newValue is null, and this map does not permit null keys or values
- **NullPointerException** — if oldValue is null and this map does not permit null values (`#optional-restrictions optional`)
- **IllegalArgumentException** — if some property of a specified key or value prevents it from being stored in this map

> *Since 1.8*
