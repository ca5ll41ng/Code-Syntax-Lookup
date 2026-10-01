---
id: "java-en-function-collections-checkedsortedmap"
language: "java"
lang: "en"
category: "function"
name: "Collections.checkedSortedMap"
signature: "public static <K,V> SortedMap<K,V> checkedSortedMap(SortedMap<K, V> m, Class<K> keyType, Class<V> valueType)"
title: "Collections.checkedSortedMap"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.checkedSortedMap

```java
public static <K,V> SortedMap<K,V> checkedSortedMap(SortedMap<K, V> m, Class<K> keyType, Class<V> valueType)
```

Returns a dynamically typesafe view of the specified sorted map.
 Any attempt to insert a mapping whose key or value have the wrong
 type will result in an immediate `ClassCastException`.
 Similarly, any attempt to modify the value currently associated with
 a key will result in an immediate `ClassCastException`,
 whether the modification is attempted directly through the map
 itself, or through a `Map.Entry` instance obtained from the
 map's `entrySet() entry set` view.

 

Assuming a map contains no incorrectly typed keys or values
 prior to the time a dynamically typesafe view is generated, and
 that all subsequent access to the map takes place through the view
 (or one of its collection views), it is guaranteed that the
 map cannot contain an incorrectly typed key or value.

 

A discussion of the use of dynamically typesafe views may be
 found in the documentation for the `checkedCollection
 checkedCollection` method.

 

The returned map will be serializable if the specified map is
 serializable.

 

Since `null` is considered to be a value of any reference
 type, the returned map permits insertion of null keys or values
 whenever the backing map does.

**参数**

- **the** — class of the map keys
- **the** — class of the map values
- **m** — the map for which a dynamically typesafe view is to be returned
- **keyType** — the type of key that `m` is permitted to hold
- **valueType** — the type of value that `m` is permitted to hold

**返回**

- a dynamically typesafe view of the specified map

> *Since 1.5*
