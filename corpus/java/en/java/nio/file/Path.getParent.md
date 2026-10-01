---
id: "java-en-function-path-getparent"
language: "java"
lang: "en"
category: "function"
name: "Path.getParent"
signature: "Path getParent()"
title: "Path.getParent"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Path.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Path.getParent

```java
Path getParent()
```

Returns the parent path, or `null` if this path does not
 have a parent.

 

 The parent of this path object consists of this path's root
 component, if any, and each element in the path except for the
 farthest from the root in the directory hierarchy. This method
 does not access the file system; the path or its parent may not exist.
 Furthermore, this method does not eliminate special names such as "."
 and ".." that may be used in some implementations. On UNIX for example,
 the parent of "`/a/b/c`" is "`/a/b`", and the parent of
 `"x/y/.`" is "`x/y`". This method may be used with the `normalize normalize` method, to eliminate redundant names, for cases where
 shell-like navigation is required.

 

 If this path has more than one element, and no root component, then
 this method is equivalent to evaluating the expression:
 {@snippet lang=java :
     subpath(0, getNameCount()-1);
 }

**返回**

- a path representing the path's parent
