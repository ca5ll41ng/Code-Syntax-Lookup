---
id: "java-en-function-concurrentmap-compute"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentMap.compute"
signature: "default V compute(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction)"
title: "ConcurrentMap.compute"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentMap.compute

```java
default V compute(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction)
```

{@inheritDoc}

 The default implementation is equivalent to performing the following
 steps for this `map`:

 
```
 `for (;;) {
   V oldValue = map.get(key);
   V newValue = remappingFunction.apply(key, oldValue);
   if (newValue != null) {
     if ((oldValue != null)
       ? map.replace(key, oldValue, newValue)
       : map.putIfAbsent(key, newValue) == null)
       return newValue;
   ` else if (oldValue == null || map.remove(key, oldValue)) {
     return null;
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
