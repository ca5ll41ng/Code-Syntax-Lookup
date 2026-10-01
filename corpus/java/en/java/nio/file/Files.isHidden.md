---
id: "java-en-function-files-ishidden"
language: "java"
lang: "en"
category: "function"
name: "Files.isHidden"
signature: "public static boolean isHidden(Path path) throws IOException"
title: "Files.isHidden"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.isHidden

```java
public static boolean isHidden(Path path) throws IOException
```

Tells whether or not a file is considered hidden.

 The exact definition of hidden is platform or provider dependent. On UNIX
 for example a file is considered to be hidden if its name begins with a
 period character ('.'). On Windows a file is considered hidden if the DOS
 `isHidden hidden` attribute is set.

 

 Depending on the implementation this method may require to access
 the file system to determine if the file is considered hidden.

**参数**

- **path** — the path to the file to test

**返回**

- `true` if the file is considered hidden

**异常**

- **IOException** — if an I/O error occurs
