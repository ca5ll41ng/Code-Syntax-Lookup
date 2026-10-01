---
id: "java-en-function-treemap-merge"
language: "java"
lang: "en"
category: "function"
name: "TreeMap.merge"
signature: "public V merge(K key, V value, BiFunction<? super V, ? super V, ? extends V> remappingFunction)"
title: "TreeMap.merge"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TreeMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TreeMap.merge

```java
public V merge(K key, V value, BiFunction<? super V, ? super V, ? extends V> remappingFunction)
```

{@inheritDoc}

 

This method will, on a best-effort basis, throw a
 `ConcurrentModificationException` if it is detected that the
 remapping function modifies this map during computation.

**异常**

- **ConcurrentModificationException** — if it is detected that the remapping function modified this map
