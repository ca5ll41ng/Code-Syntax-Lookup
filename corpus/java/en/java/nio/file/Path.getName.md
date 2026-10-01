---
id: "java-en-function-path-getname"
language: "java"
lang: "en"
category: "function"
name: "Path.getName"
signature: "Path getName(int index)"
title: "Path.getName"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Path.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Path.getName

```java
Path getName(int index)
```

Returns a name element of this path as a `Path` object.

 

 The `index` parameter is the index of the name element to return.
 The element that is closest to the root in the directory hierarchy
 has index `0`. The element that is farthest from the root
 has index `getNameCount count``-1`.

**参数**

- **index** — the index of the element

**返回**

- the name element

**异常**

- **IllegalArgumentException** — if `index` is negative, `index` is greater than or equal to the number of elements, or this path has zero name elements
