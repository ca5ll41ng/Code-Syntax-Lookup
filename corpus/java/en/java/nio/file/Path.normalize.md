---
id: "java-en-function-path-normalize"
language: "java"
lang: "en"
category: "function"
name: "Path.normalize"
signature: "Path normalize()"
title: "Path.normalize"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Path.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Path.normalize

```java
Path normalize()
```

Returns a path that is this path with redundant name elements eliminated.

 

 The precise definition of this method is implementation dependent but
 in general it derives from this path, a path that does not contain
 redundant name elements. In many file systems, the "`.`"
 and "`..`" are special names used to indicate the current directory
 and parent directory. In such file systems all occurrences of "`.`"
 are considered redundant. If a "`..`" is preceded by a
 non-"`..`" name then both names are considered redundant (the
 process to identify such names is repeated until it is no longer
 applicable).

 

 This method does not access the file system; the path may not locate
 a file that exists. Eliminating "`..`" and a preceding name from a
 path may result in the path that locates a different file than the original
 path. This can arise when the preceding name is a symbolic link.

**返回**

- the resulting path or this path if it does not contain redundant name elements; an empty path is returned if this path does not have a root component and all name elements are redundant

**参见**

- #getParent
- #toRealPath
