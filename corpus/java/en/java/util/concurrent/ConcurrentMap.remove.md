---
id: "java-en-function-concurrentmap-remove"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentMap.remove"
signature: "boolean remove(Object key, Object value)"
title: "ConcurrentMap.remove"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentMap.remove

```java
boolean remove(Object key, Object value)
```

Removes the entry for a key only if currently mapped to a given value.
 This is equivalent to, for this `map`:
 
```
 `if (map.containsKey(key)
     && Objects.equals(map.get(key), value)) {
   map.remove(key);
   return true;
 ` else {
   return false;
 }}
```

 except that the action is performed atomically.

 inappropriate default provided in `Map`.

**参数**

- **key** — key with which the specified value is associated
- **value** — value expected to be associated with the specified key

**返回**

- `true` if the value was removed

**异常**

- **UnsupportedOperationException** — if the `remove` operation is not supported by this map
- **ClassCastException** — if the key or value is of an inappropriate type for this map (optional)
- **NullPointerException** — if the specified key or value is null, and this map does not permit null keys or values (optional)
