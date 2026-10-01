---
id: "java-en-function-pathstatus-isfile"
language: "java"
lang: "en"
category: "function"
name: "PathStatus.isFile"
signature: "public boolean isFile()"
title: "PathStatus.isFile"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathStatus.isFile

```java
public boolean isFile()
```

Tests whether the file located by this abstract pathname is a normal
 file.  A file is normal if it is not a directory and, in
 addition, satisfies other system-dependent criteria.  Any non-directory
 file created by a Java application is guaranteed to be a normal file.

 

 Where it is required to distinguish an I/O exception from the case
 that the file is not a normal file, or where several attributes of the
 same file are required at the same time, then the `readAttributes(Path,Class,LinkOption[])
 Files.readAttributes` method may be used.

**返回**

- `true` if and only if the file located by this abstract pathname exists and is a normal file; `false` otherwise
