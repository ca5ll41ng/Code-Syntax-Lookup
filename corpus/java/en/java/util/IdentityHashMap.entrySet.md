---
id: "java-en-function-identityhashmap-entryset"
language: "java"
lang: "en"
category: "function"
name: "IdentityHashMap.entrySet"
signature: "public Set<Map.Entry<K,V>> entrySet()"
title: "IdentityHashMap.entrySet"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/IdentityHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IdentityHashMap.entrySet

```java
public Set<Map.Entry<K,V>> entrySet()
```

Returns a `Set` view of the mappings contained in this map.
 Each element in the returned set is a reference-equality-based
 `Map.Entry`.  The set is backed by the map, so changes
 to the map are reflected in the set, and vice-versa.  If the
 map is modified while an iteration over the set is in progress,
 the results of the iteration are undefined.  The set supports
 element removal, which removes the corresponding mapping from
 the map, via the `Iterator.remove`, `Set.remove`,
 `removeAll`, `retainAll` and `clear`
 methods.  It does not support the `add` or
 `addAll` methods.

 

Like the backing map, the `Map.Entry` objects in the set
 returned by this method define key and value equality as
 reference-equality rather than object-equality.  This affects the
 behavior of the `equals` and `hashCode` methods of these
 `Map.Entry` objects.  A reference-equality based `Map.Entry
 e` is equal to an object `o` if and only if `o` is a
 `Map.Entry` and `e.getKey()==o.getKey() &&
 e.getValue()==o.getValue()`.  To accommodate these equals
 semantics, the `hashCode` method returns
 `System.identityHashCode(e.getKey()) ^
 System.identityHashCode(e.getValue())`. (While the keys and values
 are compared using reference equality, the `Map.Entry`
 objects themselves are not.)

 

**Owing to the reference-equality-based semantics of the
 `Map.Entry` instances in the set returned by this method,
 it is possible that the symmetry and transitivity requirements of
 the `equals` contract may be violated if any of
 the entries in the set is compared to a normal map entry, or if
 the set returned by this method is compared to a set of normal map
 entries (such as would be returned by a call to this method on a normal
 map).  However, the `Object.equals` contract is guaranteed to
 hold among identity-based map entries, and among sets of such entries.
 **

**返回**

- a set view of the identity-mappings contained in this map
