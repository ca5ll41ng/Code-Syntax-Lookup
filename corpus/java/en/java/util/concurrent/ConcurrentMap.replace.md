---
id: "java-en-function-concurrentmap-replace"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentMap.replace"
signature: "boolean replace(K key, V oldValue, V newValue)"
title: "ConcurrentMap.replace"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentMap.replace

```java
boolean replace(K key, V oldValue, V newValue)
```

Replaces the entry for a key only if currently mapped to a given value.
 This is equivalent to, for this `map`:
 
```
 `if (map.containsKey(key)
     && Objects.equals(map.get(key), oldValue)) {
   map.put(key, newValue);
   return true;
 ` else {
   return false;
 }}
```

 except that the action is performed atomically.

 inappropriate default provided in `Map`.

**参数**

- **key** — key with which the specified value is associated
- **oldValue** — value expected to be associated with the specified key
- **newValue** — value to be associated with the specified key

**返回**

- `true` if the value was replaced

**异常**

- **UnsupportedOperationException** — if the `put` operation is not supported by this map
- **ClassCastException** — if the class of a specified key or value prevents it from being stored in this map
- **NullPointerException** — if a specified key or value is null, and this map does not permit null keys or values
- **IllegalArgumentException** — if some property of a specified key or value prevents it from being stored in this map
