---
id: "java-en-function-vector-equals"
language: "java"
lang: "en"
category: "function"
name: "Vector.equals"
signature: "public synchronized boolean equals(Object o)"
title: "Vector.equals"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Vector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Vector.equals

```java
public synchronized boolean equals(Object o)
```

Compares the specified Object with this Vector for equality.  Returns
 true if and only if the specified Object is also a List, both Lists
 have the same size, and all corresponding pairs of elements in the two
 Lists are equal.  (Two elements `e1` and
 `e2` are equal if `Objects.equals(e1, e2)`.)
 In other words, two Lists are defined to be
 equal if they contain the same elements in the same order.

**参数**

- **o** — the Object to be compared for equality with this Vector

**返回**

- true if the specified Object is equal to this Vector
