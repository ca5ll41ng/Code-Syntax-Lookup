---
id: "java-en-function-map-replaceall"
language: "java"
lang: "en"
category: "function"
name: "Map.replaceAll"
signature: "default void replaceAll(BiFunction<? super K, ? super V, ? extends V> function)"
title: "Map.replaceAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Map.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Map.replaceAll

```java
default void replaceAll(BiFunction<? super K, ? super V, ? extends V> function)
```

Replaces each entry's value with the result of invoking the given
 function on that entry until all entries have been processed or the
 function throws an exception (optional operation). Exceptions thrown
 by the function are relayed to the caller.

 

The default implementation is equivalent to, for this `map`:
 
```
 `for (Map.Entry entry : map.entrySet())
     entry.setValue(function.apply(entry.getKey(), entry.getValue()));
 `
```

 

The default implementation makes no guarantees about synchronization
 or atomicity properties of this method. Any implementation providing
 atomicity guarantees must override this method and document its
 concurrency properties.

**参数**

- **function** — the function to apply to each entry

**异常**

- **UnsupportedOperationException** — if the `replaceAll` operation is not supported by this map (`#optional-restrictions optional`)
- **ClassCastException** — if the class of a replacement value prevents it from being stored in this map (`#optional-restrictions optional`)
- **NullPointerException** — if the specified function is null, or if a replacement value is null and this map does not permit null values (`#optional-restrictions optional`)
- **IllegalArgumentException** — if some property of a replacement value prevents it from being stored in this map (`#optional-restrictions optional`)
- **ConcurrentModificationException** — if an entry is found to be removed during iteration

> *Since 1.8*
