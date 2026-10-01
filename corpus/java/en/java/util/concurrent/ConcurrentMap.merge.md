---
id: "java-en-function-concurrentmap-merge"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentMap.merge"
signature: "default V merge(K key, V value, BiFunction<? super V, ? super V, ? extends V> remappingFunction)"
title: "ConcurrentMap.merge"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentMap.merge

```java
default V merge(K key, V value, BiFunction<? super V, ? super V, ? extends V> remappingFunction)
```

{@inheritDoc}

 The default implementation is equivalent to performing the following
 steps for this `map`:

 
```
 `for (;;) {
   V oldValue = map.get(key);
   if (oldValue != null) {
     V newValue = remappingFunction.apply(oldValue, value);
     if (newValue != null) {
       if (map.replace(key, oldValue, newValue))
         return newValue;
     ` else if (map.remove(key, oldValue)) {
       return null;
     }
   } else if (map.putIfAbsent(key, value) == null) {
     return value;
   }
 }}
```

 When multiple threads attempt updates, map operations and the
 remapping function may be called multiple times.

 

This implementation assumes that the ConcurrentMap cannot contain null
 values and `get()` returning null unambiguously means the key is
 absent. Implementations which support null values **must**
 override this default implementation.

**异常**

- **UnsupportedOperationException** — {@inheritDoc}
- **ClassCastException** — {@inheritDoc}
- **NullPointerException** — {@inheritDoc}
- **IllegalArgumentException** — {@inheritDoc}

> *Since 1.8*
