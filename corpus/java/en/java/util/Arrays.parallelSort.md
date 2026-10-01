---
id: "java-en-function-arrays-parallelsort"
language: "java"
lang: "en"
category: "function"
name: "Arrays.parallelSort"
signature: "public static void parallelSort(byte[] a)"
title: "Arrays.parallelSort"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Arrays.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Arrays.parallelSort

```java
public static void parallelSort(byte[] a)
```

Sorts the specified array into ascending numerical order.

 Vladimir Yaroslavskiy, Jon Bentley and Josh Bloch. This algorithm
 offers O(n log(n)) performance on all data sets, and is typically
 faster than traditional (one-pivot) Quicksort implementations.

**参数**

- **a** — the array to be sorted

> *Since 1.8*
