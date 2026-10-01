---
id: "java-en-function-path-getfilename"
language: "java"
lang: "en"
category: "function"
name: "Path.getFileName"
signature: "Path getFileName()"
title: "Path.getFileName"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Path.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Path.getFileName

```java
Path getFileName()
```

Returns the name of the file or directory denoted by this path as a
 `Path` object. The file name is the farthest element from
 the root in the directory hierarchy.

**返回**

- a path representing the name of the file or directory, or `null` if this path has zero elements
