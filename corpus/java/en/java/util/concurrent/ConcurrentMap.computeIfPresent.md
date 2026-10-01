---
id: "java-en-function-concurrentmap-computeifpresent"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentMap.computeIfPresent"
signature: "default V computeIfPresent(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction)"
title: "ConcurrentMap.computeIfPresent"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentMap.computeIfPresent

```java
default V computeIfPresent(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction)
```

{@inheritDoc}

 The default implementation is equivalent to performing the following
 steps for this `map`:

 
```
 `for (V oldValue; (oldValue = map.get(key)) != null; ) {
   V newValue = remappingFunction.apply(key, oldValue);
   if ((newValue == null)
       ? map.remove(key, oldValue)
       : map.replace(key, oldValue, newValue))
     return newValue;
 `
 return null;}
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
