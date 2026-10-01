---
id: "java-en-function-concurrentmap-replaceall"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentMap.replaceAll"
signature: "default void replaceAll(BiFunction<? super K, ? super V, ? extends V> function)"
title: "ConcurrentMap.replaceAll"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentMap.replaceAll

```java
default void replaceAll(BiFunction<? super K, ? super V, ? extends V> function)
```

{@inheritDoc}

 

The default implementation is equivalent to, for this `map`:
 
```
 `for (Map.Entry entry : map.entrySet()) {
   K k;
   V v;
   do {
     k = entry.getKey();
     v = entry.getValue();
   ` while (!map.replace(k, v, function.apply(k, v)));
 }}
```

 The default implementation may retry these steps when multiple
 threads attempt updates including potentially calling the function
 repeatedly for a given key.

 

This implementation assumes that the ConcurrentMap cannot contain null
 values and `get()` returning null unambiguously means the key is
 absent. Implementations which support null values **must**
 override this default implementation.

**异常**

- **UnsupportedOperationException** — {@inheritDoc}
- **NullPointerException** — {@inheritDoc}
- **ClassCastException** — {@inheritDoc}
- **IllegalArgumentException** — {@inheritDoc}

> *Since 1.8*
