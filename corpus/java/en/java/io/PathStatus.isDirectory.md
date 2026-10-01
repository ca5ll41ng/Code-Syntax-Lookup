---
id: "java-en-function-pathstatus-isdirectory"
language: "java"
lang: "en"
category: "function"
name: "PathStatus.isDirectory"
signature: "public boolean isDirectory()"
title: "PathStatus.isDirectory"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathStatus.isDirectory

```java
public boolean isDirectory()
```

Tests whether the file located by this abstract pathname is a
 directory.

 

 Where it is required to distinguish an I/O exception from the case
 that the file is not a directory, or where several attributes of the
 same file are required at the same time, then the `readAttributes(Path,Class,LinkOption[])
 Files.readAttributes` method may be used.

**返回**

- `true` if and only if the file located by this abstract pathname exists and is a directory; `false` otherwise
