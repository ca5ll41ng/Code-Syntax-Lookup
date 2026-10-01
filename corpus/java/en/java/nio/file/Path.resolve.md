---
id: "java-en-function-path-resolve"
language: "java"
lang: "en"
category: "function"
name: "Path.resolve"
signature: "Path resolve(Path other)"
title: "Path.resolve"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Path.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Path.resolve

```java
Path resolve(Path other)
```

Resolve the given path against this path.

 

 If the `other` parameter is an `isAbsolute() absolute`
 path then this method trivially returns `other`. If `other`
 is an empty path then this method trivially returns this path.
 Otherwise this method considers this path to be a directory and resolves
 the given path against this path. In the simplest case, the given path
 does not have a `getRoot root` component, in which case this method
 joins the given path to this path and returns a resulting path
 that `endsWith ends` with the given path. Where the given path has
 a root component then resolution is highly implementation dependent and
 therefore unspecified.

**参数**

- **other** — the path to resolve against this path

**返回**

- the resulting path

**参见**

- #relativize
