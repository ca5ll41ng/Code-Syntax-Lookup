---
id: "java-en-function-arrays-compareunsigned"
language: "java"
lang: "en"
category: "function"
name: "Arrays.compareUnsigned"
signature: "public static int compareUnsigned(byte[] a, byte[] b)"
title: "Arrays.compareUnsigned"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Arrays.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Arrays.compareUnsigned

```java
public static int compareUnsigned(byte[] a, byte[] b)
```

Compares two `byte` arrays lexicographically, numerically treating
 elements as unsigned.

 

If the two arrays share a common prefix then the lexicographic
 comparison is the result of comparing two elements, as if by
 `compareUnsigned`, at an index within the
 respective arrays that is the prefix length.
 Otherwise, one array is a proper prefix of the other and, lexicographic
 comparison is the result of comparing the two array lengths.
 (See `mismatch` for the definition of a common
 and proper prefix.)

 

A `null` array reference is considered lexicographically less
 than a non-`null` array reference.  Two `null` array
 references are considered equal.

 

This method behaves as if (for non-`null` array references):
 
```
`int i = Arrays.mismatch(a, b);
     if (i >= 0 && i < Math.min(a.length, b.length))
         return Byte.compareUnsigned(a[i], b[i]);
     return a.length - b.length;
 `
```

**参数**

- **a** — the first array to compare
- **b** — the second array to compare

**返回**

- the value `0` if the first and second array are equal and contain the same elements in the same order; a value less than `0` if the first array is lexicographically less than the second array; and a value greater than `0` if the first array is lexicographically greater than the second array

> *Since 9*
