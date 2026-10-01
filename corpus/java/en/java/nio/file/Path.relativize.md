---
id: "java-en-function-path-relativize"
language: "java"
lang: "en"
category: "function"
name: "Path.relativize"
signature: "Path relativize(Path other)"
title: "Path.relativize"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Path.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Path.relativize

```java
Path relativize(Path other)
```

Constructs a relative path between this path and a given path.

 

 Relativization is the inverse of `resolve(Path) resolution`.
 This method attempts to construct a `isAbsolute relative` path
 that when `resolve(Path) resolved` against this path, yields a
 path that locates the same file as the given path. For example, on UNIX,
 if this path is `"/a/b"` and the given path is `"/a/b/c/d"`
 then the resulting relative path would be `"c/d"`. Where this
 path and the given path do not have a `getRoot root` component,
 then a relative path can be constructed. A relative path cannot be
 constructed if only one of the paths have a root component. Where both
 paths have a root component then it is implementation dependent if a
 relative path can be constructed. If this path and the given path are
 `equals equal` then an empty path is returned.

 

 For any two `normalize normalized` paths p and
 q, where q does not have a root component,
 
   p`.relativize(`p
   `.resolve(`q`)).equals(`q`)`
 

 

 When symbolic links are supported, then whether the resulting path,
 when resolved against this path, yields a path that can be used to locate
 the `isSameFile same` file as `other` is implementation
 dependent. For example, if this path is  `"/a/b"` and the given
 path is `"/a/x"` then the resulting relative path may be `"../x"`. If `"b"` is a symbolic link then is implementation
 dependent if `"a/b/../x"` would locate the same file as `"/a/x"`.

**参数**

- **other** — the path to relativize against this path

**返回**

- the resulting relative path, or an empty path if both paths are equal

**异常**

- **IllegalArgumentException** — if `other` is not a `Path` that can be relativized against this path
