---
id: "java-en-function-map-putifabsent"
language: "java"
lang: "en"
category: "function"
name: "Map.putIfAbsent"
signature: "default V putIfAbsent(K key, V value)"
title: "Map.putIfAbsent"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Map.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Map.putIfAbsent

```java
default V putIfAbsent(K key, V value)
```

If the specified key is not already associated with a value (or is mapped
 to `null`) associates it with the given value and returns
 `null`, else returns the current value (optional operation).

 The default implementation is equivalent to, for this `map`:

 
```
 `V v = map.get(key);
 if (v == null)
     v = map.put(key, value);

 return v;
 `
```

 

The default implementation makes no guarantees about synchronization
 or atomicity properties of this method. Any implementation providing
 atomicity guarantees must override this method and document its
 concurrency properties.

**参数**

- **key** — key with which the specified value is to be associated
- **value** — value to be associated with the specified key

**返回**

- the previous value associated with the specified key, or `null` if there was no mapping for the key. (A `null` return can also indicate that the map previously associated `null` with the key, if the implementation supports null values.)

**异常**

- **UnsupportedOperationException** — if the `putIfAbsent` operation is not supported by this map (`#optional-restrictions optional`)
- **ClassCastException** — if the key or value is of an inappropriate type for this map (`#optional-restrictions optional`)
- **NullPointerException** — if the specified key or value is null, and this map does not permit null keys or values (`#optional-restrictions optional`)
- **IllegalArgumentException** — if some property of the specified key or value prevents it from being stored in this map (`#optional-restrictions optional`)

> *Since 1.8*
