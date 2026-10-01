---
id: "java-en-function-collections-unmodifiablenavigablemap"
language: "java"
lang: "en"
category: "function"
name: "Collections.unmodifiableNavigableMap"
signature: "public static <K,V> NavigableMap<K,V> unmodifiableNavigableMap(NavigableMap<K, ? extends V> m)"
title: "Collections.unmodifiableNavigableMap"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.unmodifiableNavigableMap

```java
public static <K,V> NavigableMap<K,V> unmodifiableNavigableMap(NavigableMap<K, ? extends V> m)
```

Returns an unmodifiable view of the
 specified navigable map. Query operations on the returned navigable map "read
 through" to the specified navigable map.  Attempts to modify the returned
 navigable map, whether direct, via its collection views, or via its
 `subMap`, `headMap`, or `tailMap` views, result in
 an `UnsupportedOperationException`.

 The returned navigable map will be serializable if the specified
 navigable map is serializable.

**参数**

- **the** — class of the map keys
- **the** — class of the map values
- **m** — the navigable map for which an unmodifiable view is to be returned

**返回**

- an unmodifiable view of the specified navigable map

> *Since 1.8*
