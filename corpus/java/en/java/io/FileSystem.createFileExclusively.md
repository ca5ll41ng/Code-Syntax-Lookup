---
id: "java-en-function-filesystem-createfileexclusively"
language: "java"
lang: "en"
category: "function"
name: "FileSystem.createFileExclusively"
signature: "public abstract boolean createFileExclusively(String pathname) throws IOException"
title: "FileSystem.createFileExclusively"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FileSystem.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystem.createFileExclusively

```java
public abstract boolean createFileExclusively(String pathname) throws IOException
```

Create a new empty file with the given pathname.  Return
 `true` if the file was created and `false` if a
 file or directory with the given pathname already exists.  Throw an
 IOException if an I/O error occurs.
