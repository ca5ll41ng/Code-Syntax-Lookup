---
id: "java-en-function-treemap-treemap"
language: "java"
lang: "en"
category: "function"
name: "TreeMap.TreeMap"
signature: "public TreeMap()"
title: "TreeMap.TreeMap"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TreeMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TreeMap.TreeMap

```java
public TreeMap()
```

Constructs a new, empty tree map, using the natural ordering of its
 keys.  All keys inserted into the map must implement the `Comparable` interface.  Furthermore, all such keys must be
 mutually comparable: `k1.compareTo(k2)` must not throw
 a `ClassCastException` for any keys `k1` and
 `k2` in the map.  If the user attempts to put a key into the
 map that violates this constraint (for example, the user attempts to
 put a string key into a map whose keys are integers), the
 `put(Object key, Object value)` call will throw a
 `ClassCastException`.
