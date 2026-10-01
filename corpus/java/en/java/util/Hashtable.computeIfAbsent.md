---
id: "java-en-function-hashtable-computeifabsent"
language: "java"
lang: "en"
category: "function"
name: "Hashtable.computeIfAbsent"
signature: "public synchronized V computeIfAbsent(K key, Function<? super K, ? extends V> mappingFunction)"
title: "Hashtable.computeIfAbsent"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Hashtable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Hashtable.computeIfAbsent

```java
public synchronized V computeIfAbsent(K key, Function<? super K, ? extends V> mappingFunction)
```

{@inheritDoc}

 

This method will, on a best-effort basis, throw a
 `java.util.ConcurrentModificationException` if the mapping
 function modified this map during computation.

**异常**

- **ConcurrentModificationException** — if it is detected that the mapping function modified this map
