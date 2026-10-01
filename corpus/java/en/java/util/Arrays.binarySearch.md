---
id: "java-en-function-arrays-binarysearch"
language: "java"
lang: "en"
category: "function"
name: "Arrays.binarySearch"
signature: "public static int binarySearch(long[] a, long key)"
title: "Arrays.binarySearch"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Arrays.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Arrays.binarySearch

```java
public static int binarySearch(long[] a, long key)
```

Searches the specified array of longs for the specified value using the
 binary search algorithm.  The array must be sorted (as
 by the `sort` method) prior to making this call.  If it
 is not sorted, the results are undefined.  If the array contains
 multiple elements with the specified value, there is no guarantee which
 one will be found.

**参数**

- **a** — the array to be searched
- **key** — the value to be searched for

**返回**

- index of the search key, if it is contained in the array; otherwise, (-(insertion point) - 1).  The insertion point is defined as the point at which the key would be inserted into the array: the index of the first element greater than the key, or `a.length` if all elements in the array are less than the specified key.  Note that this guarantees that the return value will be &gt;= 0 if and only if the key is found.
