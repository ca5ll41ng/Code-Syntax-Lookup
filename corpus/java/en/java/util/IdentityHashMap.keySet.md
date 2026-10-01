---
id: "java-en-function-identityhashmap-keyset"
language: "java"
lang: "en"
category: "function"
name: "IdentityHashMap.keySet"
signature: "public Set<K> keySet()"
title: "IdentityHashMap.keySet"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/IdentityHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IdentityHashMap.keySet

```java
public Set<K> keySet()
```

Returns an identity-based set view of the keys contained in this map.
 The set is backed by the map, so changes to the map are reflected in
 the set, and vice-versa.  If the map is modified while an iteration
 over the set is in progress, the results of the iteration are
 undefined.  The set supports element removal, which removes the
 corresponding mapping from the map, via the `Iterator.remove`,
 `Set.remove`, `removeAll`, `retainAll`, and
 `clear` methods.  It does not support the `add` or
 `addAll` methods.

 

**While the object returned by this method implements the
 `Set` interface, it does not obey `Set's` general
 contract.  Like its backing map, the set returned by this method
 defines element equality as reference-equality rather than
 object-equality.  This affects the behavior of its `contains`,
 `remove`, `containsAll`, `equals`, and
 `hashCode` methods.**

 

**The `equals` method of the returned set returns `true`
 only if the specified object is a set containing exactly the same
 object references as the returned set.  The symmetry and transitivity
 requirements of the `Object.equals` contract may be violated if
 the set returned by this method is compared to a normal set.  However,
 the `Object.equals` contract is guaranteed to hold among sets
 returned by this method.**

 

The `hashCode` method of the returned set returns the sum of
 the identity hashcodes of the elements in the set, rather than
 the sum of their hashcodes.  This is mandated by the change in the
 semantics of the `equals` method, in order to enforce the
 general contract of the `Object.hashCode` method among sets
 returned by this method.

**返回**

- an identity-based set view of the keys contained in this map

**参见**

- Object#equals(Object)
- System#identityHashCode(Object)
