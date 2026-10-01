---
id: "java-en-function-arrays-equals"
language: "java"
lang: "en"
category: "function"
name: "Arrays.equals"
signature: "public static boolean equals(long[] a, long[] a2)"
title: "Arrays.equals"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Arrays.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Arrays.equals

```java
public static boolean equals(long[] a, long[] a2)
```

Returns `true` if the two specified arrays of longs are
 equal to one another.  Two arrays are considered equal if both
 arrays contain the same number of elements, and all corresponding pairs
 of elements in the two arrays are equal.  In other words, two arrays
 are equal if they contain the same elements in the same order.  Also,
 two array references are considered equal if both are `null`.

**参数**

- **a** — one array to be tested for equality
- **a2** — the other array to be tested for equality

**返回**

- `true` if the two arrays are equal
