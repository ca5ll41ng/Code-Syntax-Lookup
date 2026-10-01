---
id: "java-en-function-identityhashmap-equals"
language: "java"
lang: "en"
category: "function"
name: "IdentityHashMap.equals"
signature: "public boolean equals(Object o)"
title: "IdentityHashMap.equals"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/IdentityHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IdentityHashMap.equals

```java
public boolean equals(Object o)
```

Compares the specified object with this map for equality.  Returns
 `true` if the given object is also a map and the two maps
 represent identical object-reference mappings.  More formally, this
 map is equal to another map `m` if and only if
 `this.entrySet().equals(m.entrySet())`. See the
 `entrySet() entrySet` method for the specification of equality
 of this map's entries.

 

**Owing to the reference-equality-based semantics of this map it is
 possible that the symmetry and transitivity requirements of the
 `Object.equals` contract may be violated if this map is compared
 to a normal map.  However, the `Object.equals` contract is
 guaranteed to hold among `IdentityHashMap` instances.**

**参数**

- **o** — object to be compared for equality with this map

**返回**

- `true` if the specified object is equal to this map

**参见**

- Object#equals(Object)
