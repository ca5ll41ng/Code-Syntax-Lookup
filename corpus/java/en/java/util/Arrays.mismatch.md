---
id: "java-en-function-arrays-mismatch"
language: "java"
lang: "en"
category: "function"
name: "Arrays.mismatch"
signature: "public static int mismatch(boolean[] a, boolean[] b)"
title: "Arrays.mismatch"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Arrays.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Arrays.mismatch

```java
public static int mismatch(boolean[] a, boolean[] b)
```

Finds and returns the index of the first mismatch between two
 `boolean` arrays, otherwise return -1 if no mismatch is found.  The
 index will be in the range of 0 (inclusive) up to the length (inclusive)
 of the smaller array.

 

If the two arrays share a common prefix then the returned index is the
 length of the common prefix and it follows that there is a mismatch
 between the two elements at that index within the respective arrays.
 If one array is a proper prefix of the other then the returned index is
 the length of the smaller array and it follows that the index is only
 valid for the larger array.
 Otherwise, there is no mismatch.

 

Two non-`null` arrays, `a` and `b`, share a common
 prefix of length `pl` if the following expression is true:
 
```
`pl >= 0 &&
     pl < Math.min(a.length, b.length) &&
     Arrays.equals(a, 0, pl, b, 0, pl) &&
     a[pl] != b[pl]
 `
```

 Note that a common prefix length of `0` indicates that the first
 elements from each array mismatch.

 

Two non-`null` arrays, `a` and `b`, share a proper
 prefix if the following expression is true:
 
```
`a.length != b.length &&
     Arrays.equals(a, 0, Math.min(a.length, b.length),
                   b, 0, Math.min(a.length, b.length))
 `
```

**参数**

- **a** — the first array to be tested for a mismatch
- **b** — the second array to be tested for a mismatch

**返回**

- the index of the first mismatch between the two arrays, otherwise `-1`.

**异常**

- **NullPointerException** — if either array is `null`

> *Since 9*
