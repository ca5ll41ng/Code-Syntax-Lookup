---
id: "java-en-function-tabulardatasupport-entryset"
language: "java"
lang: "en"
category: "function"
name: "TabularDataSupport.entrySet"
signature: "public Set<Map.Entry<Object,Object>> entrySet()"
title: "TabularDataSupport.entrySet"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/TabularDataSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TabularDataSupport.entrySet

```java
public Set<Map.Entry<Object,Object>> entrySet()
```

Returns a collection view of the index to row mappings
 contained in this `TabularDataSupport` instance.
 Each element in the returned collection is
 a `Map.Entry
- ,CompositeData>` but
 is declared as a `Map.Entry`
 for compatibility reasons. Each of the map entry
 keys is an unmodifiable `List<?>`.
 The collection is backed by the underlying map of this
 `TabularDataSupport` instance, so changes to the
 `TabularDataSupport` instance are reflected in
 the collection, and vice-versa.
 The collection supports element removal, which removes
 the corresponding mapping from the map, via the
 `remove`, `remove`,
 `removeAll`, `retainAll`,
 and `clear` operations. It does not support
 the `add` or `addAll`
 operations.
 

 **IMPORTANT NOTICE**: Do not use the `setValue` method of the
 `Map.Entry` elements contained in the returned collection view.
 Doing so would corrupt the index to row mappings contained in this
 `TabularDataSupport` instance.

**返回**

- a collection view (`Set>`) of the mappings contained in this map.

**参见**

- java.util.Map.Entry
