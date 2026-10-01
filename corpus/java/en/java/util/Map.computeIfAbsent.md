---
id: "java-en-function-map-computeifabsent"
language: "java"
lang: "en"
category: "function"
name: "Map.computeIfAbsent"
signature: "default V computeIfAbsent(K key, Function<? super K, ? extends V> mappingFunction)"
title: "Map.computeIfAbsent"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Map.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Map.computeIfAbsent

```java
default V computeIfAbsent(K key, Function<? super K, ? extends V> mappingFunction)
```

If the specified key is not already associated with a value (or is mapped
 to `null`), attempts to compute its value using the given mapping
 function and enters it into this map unless `null` (optional operation).

 

If the mapping function returns `null`, no mapping is recorded.
 If the mapping function itself throws an (unchecked) exception, the
 exception is rethrown, and no mapping is recorded.  The most
 common usage is to construct a new object serving as an initial
 mapped value or memoized result, as in:

 
```
 `map.computeIfAbsent(key, k -> new Value(f(k)));
 `
```

 

Or to implement a multi-value map, `Map>`,
 supporting multiple values per key:

 
```
 `map.computeIfAbsent(key, k -> new HashSet()).add(v);
 `
```

 

The mapping function should not modify this map during computation.

 The default implementation is equivalent to the following steps for this
 `map`, then returning the current value or `null` if now
 absent:

 
```
 `if (map.get(key) == null) {
     V newValue = mappingFunction.apply(key);
     if (newValue != null)
         map.put(key, newValue);
 `
 }
```

 

The default implementation makes no guarantees about detecting if the
 mapping function modifies this map during computation and, if
 appropriate, reporting an error. Non-concurrent implementations should
 override this method and, on a best-effort basis, throw a
 `ConcurrentModificationException` if it is detected that the
 mapping function modifies this map during computation. Concurrent
 implementations should override this method and, on a best-effort basis,
 throw an `IllegalStateException` if it is detected that the
 mapping function modifies this map during computation and as a result
 computation would never complete.

 

The default implementation makes no guarantees about synchronization
 or atomicity properties of this method. Any implementation providing
 atomicity guarantees must override this method and document its
 concurrency properties. In particular, all implementations of
 subinterface `java.util.concurrent.ConcurrentMap` must document
 whether the mapping function is applied once atomically only if the value
 is not present.

**参数**

- **key** — key with which the specified value is to be associated
- **mappingFunction** — the mapping function to compute a value

**返回**

- the current (existing or computed) value associated with the specified key, or null if the computed value is null

**异常**

- **NullPointerException** — if the specified key is null and this map does not support null keys, or the mappingFunction is null
- **UnsupportedOperationException** — if the `computeIfAbsent` operation is not supported by this map (`#optional-restrictions optional`)
- **ClassCastException** — if the class of the specified key or value prevents it from being stored in this map (`#optional-restrictions optional`)
- **IllegalArgumentException** — if some property of the specified key or value prevents it from being stored in this map (`#optional-restrictions optional`)

> *Since 1.8*
