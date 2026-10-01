---
id: "java-en-function-abstractmap-equals"
language: "java"
lang: "en"
category: "function"
name: "AbstractMap.equals"
signature: "public boolean equals(Object o)"
title: "AbstractMap.equals"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractMap.equals

```java
public boolean equals(Object o)
```

Compares the specified object with this map for equality.  Returns
 `true` if the given object is also a map and the two maps
 represent the same mappings.  More formally, two maps `m1` and
 `m2` represent the same mappings if
 `m1.entrySet().equals(m2.entrySet())`.  This ensures that the
 `equals` method works properly across different implementations
 of the `Map` interface.

 This implementation first checks if the specified object is this map;
 if so it returns `true`.  Then, it checks if the specified
 object is a map whose size is identical to the size of this map; if
 not, it returns `false`.  If so, it iterates over this map's
 `entrySet` collection, and checks that the specified map
 contains each mapping that this map contains.  If the specified map
 fails to contain such a mapping, `false` is returned.  If the
 iteration completes, `true` is returned.

**参数**

- **o** — object to be compared for equality with this map

**返回**

- `true` if the specified object is equal to this map
