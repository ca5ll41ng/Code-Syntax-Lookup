---
id: "java-en-function-hashmap-compute"
language: "java"
lang: "en"
category: "function"
name: "HashMap.compute"
signature: "public V compute(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction)"
title: "HashMap.compute"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HashMap.compute

```java
public V compute(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction)
```

{@inheritDoc}

 

This method will, on a best-effort basis, throw a
 `ConcurrentModificationException` if it is detected that the
 remapping function modifies this map during computation.

**异常**

- **ConcurrentModificationException** — if it is detected that the remapping function modified this map
