---
id: "java-en-function-hashtable-computeifpresent"
language: "java"
lang: "en"
category: "function"
name: "Hashtable.computeIfPresent"
signature: "public synchronized V computeIfPresent(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction)"
title: "Hashtable.computeIfPresent"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Hashtable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Hashtable.computeIfPresent

```java
public synchronized V computeIfPresent(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction)
```

{@inheritDoc}

 

This method will, on a best-effort basis, throw a
 `java.util.ConcurrentModificationException` if the remapping
 function modified this map during computation.

**异常**

- **ConcurrentModificationException** — if it is detected that the remapping function modified this map
