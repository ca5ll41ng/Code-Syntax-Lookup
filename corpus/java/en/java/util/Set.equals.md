---
id: "java-en-function-set-equals"
language: "java"
lang: "en"
category: "function"
name: "Set.equals"
signature: "boolean equals(Object o)"
title: "Set.equals"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Set.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Set.equals

```java
boolean equals(Object o)
```

Compares the specified object with this set for equality.  Returns
 `true` if the specified object is also a set, the two sets
 have the same size, and every member of the specified set is
 contained in this set (or equivalently, every member of this set is
 contained in the specified set).  This definition ensures that the
 equals method works properly across different implementations of the
 set interface.

**参数**

- **o** — object to be compared for equality with this set

**返回**

- `true` if the specified object is equal to this set
