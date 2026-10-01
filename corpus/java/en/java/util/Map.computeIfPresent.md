---
id: "java-en-function-map-computeifpresent"
language: "java"
lang: "en"
category: "function"
name: "Map.computeIfPresent"
signature: "default V computeIfPresent(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction)"
title: "Map.computeIfPresent"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Map.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Map.computeIfPresent

```java
default V computeIfPresent(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction)
```

If the value for the specified key is present and non-null, attempts to
 compute a new mapping given the key and its current mapped value
 (optional operation).

 

If the remapping function returns `null`, the mapping is removed.
 If the remapping function itself throws an (unchecked) exception, the
 exception is rethrown, and the current mapping is left unchanged.

 

The remapping function should not modify this map during computation.

 The default implementation is equivalent to performing the following
 steps for this `map`, then returning the current value or
 `null` if now absent:

 
```
 `if (map.get(key) != null) {
     V oldValue = map.get(key);
     V newValue = remappingFunction.apply(key, oldValue);
     if (newValue != null)
         map.put(key, newValue);
     else
         map.remove(key);
 `
 }
```

 

The default implementation makes no guarantees about detecting if the
 remapping function modifies this map during computation and, if
 appropriate, reporting an error. Non-concurrent implementations should
 override this method and, on a best-effort basis, throw a
 `ConcurrentModificationException` if it is detected that the
 remapping function modifies this map during computation. Concurrent
 implementations should override this method and, on a best-effort basis,
 throw an `IllegalStateException` if it is detected that the
 remapping function modifies this map during computation and as a result
 computation would never complete.

 

The default implementation makes no guarantees about synchronization
 or atomicity properties of this method. Any implementation providing
 atomicity guarantees must override this method and document its
 concurrency properties. In particular, all implementations of
 subinterface `java.util.concurrent.ConcurrentMap` must document
 whether the remapping function is applied once atomically only if the
 value is not present.

**参数**

- **key** — key with which the specified value is to be associated
- **remappingFunction** — the remapping function to compute a value

**返回**

- the new value associated with the specified key, or null if none

**异常**

- **NullPointerException** — if the specified key is null and this map does not support null keys, or the remappingFunction is null
- **UnsupportedOperationException** — if the `computeIfPresent` operation is not supported by this map (`#optional-restrictions optional`)
- **ClassCastException** — if the class of the specified key or value prevents it from being stored in this map (`#optional-restrictions optional`)
- **IllegalArgumentException** — if some property of the specified key or value prevents it from being stored in this map (`#optional-restrictions optional`)

> *Since 1.8*
