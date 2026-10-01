---
id: "java-en-function-concurrentmap-putifabsent"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentMap.putIfAbsent"
signature: "V putIfAbsent(K key, V value)"
title: "ConcurrentMap.putIfAbsent"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentMap.putIfAbsent

```java
V putIfAbsent(K key, V value)
```

If the specified key is not already associated
 with a value, associates it with the given value.
 This is equivalent to, for this `map`:
 
```
 `if (!map.containsKey(key))
   return map.put(key, value);
 else
   return map.get(key);`
```

 except that the action is performed atomically.

 inappropriate default provided in `Map`.

**参数**

- **key** — key with which the specified value is to be associated
- **value** — value to be associated with the specified key

**返回**

- the previous value associated with the specified key, or `null` if there was no mapping for the key. (A `null` return can also indicate that the map previously associated `null` with the key, if the implementation supports null values.)

**异常**

- **UnsupportedOperationException** — if the `put` operation is not supported by this map
- **ClassCastException** — if the class of the specified key or value prevents it from being stored in this map
- **NullPointerException** — if the specified key or value is null, and this map does not permit null keys or values
- **IllegalArgumentException** — if some property of the specified key or value prevents it from being stored in this map
