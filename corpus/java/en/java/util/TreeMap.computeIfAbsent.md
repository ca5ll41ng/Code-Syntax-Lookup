---
id: "java-en-function-treemap-computeifabsent"
language: "java"
lang: "en"
category: "function"
name: "TreeMap.computeIfAbsent"
signature: "public V computeIfAbsent(K key, Function<? super K, ? extends V> mappingFunction)"
title: "TreeMap.computeIfAbsent"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TreeMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TreeMap.computeIfAbsent

```java
public V computeIfAbsent(K key, Function<? super K, ? extends V> mappingFunction)
```

{@inheritDoc}

 

This method will, on a best-effort basis, throw a
 `ConcurrentModificationException` if it is detected that the
 mapping function modifies this map during computation.

**异常**

- **ConcurrentModificationException** — if it is detected that the mapping function modified this map
