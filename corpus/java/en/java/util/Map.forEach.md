---
id: "java-en-function-map-foreach"
language: "java"
lang: "en"
category: "function"
name: "Map.forEach"
signature: "default void forEach(BiConsumer<? super K, ? super V> action)"
title: "Map.forEach"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Map.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Map.forEach

```java
default void forEach(BiConsumer<? super K, ? super V> action)
```

Performs the given action for each entry in this map until all entries
 have been processed or the action throws an exception.   Unless
 otherwise specified by the implementing class, actions are performed in
 the order of entry set iteration (if an iteration order is specified.)
 Exceptions thrown by the action are relayed to the caller.

 The default implementation is equivalent to, for this `map`:
 
```
 `for (Map.Entry entry : map.entrySet())
     action.accept(entry.getKey(), entry.getValue());
 `
```

 The default implementation makes no guarantees about synchronization
 or atomicity properties of this method. Any implementation providing
 atomicity guarantees must override this method and document its
 concurrency properties.

**参数**

- **action** — The action to be performed for each entry

**异常**

- **NullPointerException** — if the specified action is null
- **ConcurrentModificationException** — if an entry is found to be removed during iteration

> *Since 1.8*
