---
id: "java-en-function-weakpairmap-values"
language: "java"
lang: "en"
category: "function"
name: "WeakPairMap.values"
signature: "public Collection<V> values()"
title: "WeakPairMap.values"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/WeakPairMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WeakPairMap.values

```java
public Collection<V> values()
```

Returns a `Collection` view of the values contained in this
 WeakPairMap. The collection is backed by the WeakPairMap, so changes to
 the map are reflected in the collection, and vice-versa.  The collection
 supports element removal, which removes the corresponding
 mapping from this map, via the `Iterator.remove`,
 `Collection.remove`, `removeAll`,
 `retainAll`, and `clear` operations.  It does not
 support the `add` or `addAll` operations.

**返回**

- the collection view
