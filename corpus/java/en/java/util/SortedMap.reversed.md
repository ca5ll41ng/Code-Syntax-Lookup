---
id: "java-en-function-sortedmap-reversed"
language: "java"
lang: "en"
category: "function"
name: "SortedMap.reversed"
signature: "default SortedMap<K, V> reversed()"
title: "SortedMap.reversed"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SortedMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SortedMap.reversed

```java
default SortedMap<K, V> reversed()
```

{@inheritDoc}

 The implementation in this interface returns a reverse-ordered SortedMap
 view. The `reversed()` method of the view returns a reference
 to this SortedMap. Other operations on the view are implemented via calls to
 public methods on this SortedMap. The exact relationship between calls on the
 view and calls on this SortedMap is unspecified. However, order-sensitive
 operations generally behave as if they delegate to the appropriate method
 with the opposite orientation. For example, calling `firstEntry` on
 the view might result in a call to `lastEntry` on this SortedMap.

**返回**

- a reverse-ordered view of this map, as a `SortedMap`

> *Since 21*
