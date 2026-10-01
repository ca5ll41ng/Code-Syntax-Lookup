---
id: "java-en-function-identityhashmap-values"
language: "java"
lang: "en"
category: "function"
name: "IdentityHashMap.values"
signature: "public Collection<V> values()"
title: "IdentityHashMap.values"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/IdentityHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IdentityHashMap.values

```java
public Collection<V> values()
```

Returns a `Collection` view of the values contained in this map.
 The collection is backed by the map, so changes to the map are
 reflected in the collection, and vice-versa.  If the map is
 modified while an iteration over the collection is in progress,
 the results of the iteration are undefined.  The collection
 supports element removal, which removes the corresponding
 mapping from the map, via the `Iterator.remove`,
 `Collection.remove`, `removeAll`,
 `retainAll` and `clear` methods.  It does not
 support the `add` or `addAll` methods.

 

**While the object returned by this method implements the
 `Collection` interface, it does not obey
 `Collection's` general contract.  Like its backing map,
 the collection returned by this method defines element equality as
 reference-equality rather than object-equality.  This affects the
 behavior of its `contains`, `remove` and
 `containsAll` methods.**
