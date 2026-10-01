---
id: "java-en-function-path-resolvesibling"
language: "java"
lang: "en"
category: "function"
name: "Path.resolveSibling"
signature: "default Path resolveSibling(Path other)"
title: "Path.resolveSibling"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Path.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Path.resolveSibling

```java
default Path resolveSibling(Path other)
```

Resolves the given path against this path's `getParent parent`
 path. This is useful where a file name needs to be replaced with
 another file name. For example, suppose that the name separator is
 "`/`" and a path represents "`dir1/dir2/foo`", then invoking
 this method with the `Path` "`bar`" will result in the `Path` "`dir1/dir2/bar`". If this path does not have a parent path,
 or `other` is `isAbsolute() absolute`, then this method
 returns `other`. If `other` is an empty path then this method
 returns this path's parent, or where this path doesn't have a parent, the
 empty path.

 The default implementation is equivalent for this path to:
 {@snippet lang=java :
     (getParent() == null) ? other : getParent().resolve(other);
 }
 unless `other == null`, in which case a
 `NullPointerException` is thrown.

**参数**

- **other** — the path to resolve against this path's parent

**返回**

- the resulting path

**参见**

- #resolve(Path)
