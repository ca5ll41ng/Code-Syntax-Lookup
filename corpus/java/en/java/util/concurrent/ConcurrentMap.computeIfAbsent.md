---
id: "java-en-function-concurrentmap-computeifabsent"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentMap.computeIfAbsent"
signature: "default V computeIfAbsent(K key, Function<? super K, ? extends V> mappingFunction)"
title: "ConcurrentMap.computeIfAbsent"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentMap.computeIfAbsent

```java
default V computeIfAbsent(K key, Function<? super K, ? extends V> mappingFunction)
```

{@inheritDoc}

 The default implementation is equivalent to the following steps for this
 `map`:

 
```
 `V oldValue, newValue;
 return ((oldValue = map.get(key)) == null
         && (newValue = mappingFunction.apply(key)) != null
         && (oldValue = map.putIfAbsent(key, newValue)) == null)
   ? newValue
   : oldValue;`
```

 

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
