---
id: "java-en-function-hashmap-computeifpresent"
language: "java"
lang: "en"
category: "function"
name: "HashMap.computeIfPresent"
signature: "public V computeIfPresent(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction)"
title: "HashMap.computeIfPresent"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HashMap.computeIfPresent

```java
public V computeIfPresent(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction)
```

{@inheritDoc}

 

This method will, on a best-effort basis, throw a
 `ConcurrentModificationException` if it is detected that the
 remapping function modifies this map during computation.

**异常**

- **ConcurrentModificationException** — if it is detected that the remapping function modified this map
