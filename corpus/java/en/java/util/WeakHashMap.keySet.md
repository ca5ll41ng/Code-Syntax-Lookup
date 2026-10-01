---
id: "java-en-function-weakhashmap-keyset"
language: "java"
lang: "en"
category: "function"
name: "WeakHashMap.keySet"
signature: "public Set<K> keySet()"
title: "WeakHashMap.keySet"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/WeakHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WeakHashMap.keySet

```java
public Set<K> keySet()
```

Returns a `Set` view of the keys contained in this map.
 The set is backed by the map, so changes to the map are
 reflected in the set, and vice-versa.  If the map is modified
 while an iteration over the set is in progress (except through
 the iterator's own `remove` operation), the results of
 the iteration are undefined.  The set supports element removal,
 which removes the corresponding mapping from the map, via the
 `Iterator.remove`, `Set.remove`,
 `removeAll`, `retainAll`, and `clear`
 operations.  It does not support the `add` or `addAll`
 operations.
