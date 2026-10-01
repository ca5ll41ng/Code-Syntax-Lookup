---
id: "java-en-function-identityhashmap-hashcode"
language: "java"
lang: "en"
category: "function"
name: "IdentityHashMap.hashCode"
signature: "public int hashCode()"
title: "IdentityHashMap.hashCode"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/IdentityHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IdentityHashMap.hashCode

```java
public int hashCode()
```

Returns the hash code value for this map.  The hash code of a map is
 defined to be the sum of the hash codes of each entry of this map.
 See the `entrySet() entrySet` method for a specification of the
 hash code of this map's entries.

 

This specification ensures that `m1.equals(m2)`
 implies that `m1.hashCode()==m2.hashCode()` for any two
 `IdentityHashMap` instances `m1` and `m2`, as
 required by the general contract of `hashCode`.

 

**Owing to the reference-equality-based semantics of the
 `Map.Entry` instances in the set returned by this map's
 `entrySet` method, it is possible that the contractual
 requirement of `Object.hashCode` mentioned in the previous
 paragraph will be violated if one of the two objects being compared is
 an `IdentityHashMap` instance and the other is a normal map.**

**返回**

- the hash code value for this map

**参见**

- Object#equals(Object)
- #equals(Object)
