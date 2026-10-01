---
id: "java-en-function-sequencedmap-reversed"
language: "java"
lang: "en"
category: "function"
name: "SequencedMap.reversed"
signature: "SequencedMap<K, V> reversed()"
title: "SequencedMap.reversed"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SequencedMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SequencedMap.reversed

```java
SequencedMap<K, V> reversed()
```

Returns a reverse-ordered view of this map.
 The encounter order of mappings in the returned view is the inverse of the encounter
 order of mappings in this map. The reverse ordering affects all order-sensitive operations,
 including those on the view collections of the returned view. If the implementation permits
 modifications to this view, the modifications "write through" to the underlying map.
 Changes to the underlying map might or might not be visible in this reversed view,
 depending upon the implementation.

**返回**

- a reverse-ordered view of this map
