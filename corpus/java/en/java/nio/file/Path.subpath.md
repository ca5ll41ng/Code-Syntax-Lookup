---
id: "java-en-function-path-subpath"
language: "java"
lang: "en"
category: "function"
name: "Path.subpath"
signature: "Path subpath(int beginIndex, int endIndex)"
title: "Path.subpath"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Path.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Path.subpath

```java
Path subpath(int beginIndex, int endIndex)
```

Returns a relative `Path` that is a subsequence of the name
 elements of this path.

 

 The `beginIndex` and `endIndex` parameters specify the
 subsequence of name elements. The name that is closest to the root
 in the directory hierarchy has index `0`. The name that is
 farthest from the root has index `getNameCount
 count``-1`. The returned `Path` object has the name elements
 that begin at `beginIndex` and extend to the element at index `endIndex-1`.

**参数**

- **beginIndex** — the index of the first element, inclusive
- **endIndex** — the index of the last element, exclusive

**返回**

- a new `Path` object that is a subsequence of the name elements in this `Path`

**异常**

- **IllegalArgumentException** — if `beginIndex` is negative, or greater than or equal to the number of elements. If `endIndex` is less than or equal to `beginIndex`, or larger than the number of elements.
