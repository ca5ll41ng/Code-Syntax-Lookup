---
id: "java-en-function-files-issymboliclink"
language: "java"
lang: "en"
category: "function"
name: "Files.isSymbolicLink"
signature: "public static boolean isSymbolicLink(Path path)"
title: "Files.isSymbolicLink"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.isSymbolicLink

```java
public static boolean isSymbolicLink(Path path)
```

Tests whether a file is a symbolic link.

 

 Where it is required to distinguish an I/O exception from the case
 that the file is not a symbolic link then the file attributes can be
 read with the `readAttributes(Path,Class,LinkOption[])
 readAttributes` method and the file type tested with the `isSymbolicLink` method.

**参数**

- **path** — The path to the file

**返回**

- `true` if the file is a symbolic link; `false` if the file does not exist, is not a symbolic link, or it cannot be determined if the file is a symbolic link or not.
