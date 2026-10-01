---
id: "java-en-function-filesystem-checkaccess"
language: "java"
lang: "en"
category: "function"
name: "FileSystem.checkAccess"
signature: "public abstract boolean checkAccess(File f, int access)"
title: "FileSystem.checkAccess"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FileSystem.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystem.checkAccess

```java
public abstract boolean checkAccess(File f, int access)
```

Check whether the file or directory denoted by the given abstract
 pathname may be accessed by this process.  The second argument specifies
 which access, ACCESS_READ, ACCESS_WRITE or ACCESS_EXECUTE, to check.
 Return false if access is denied or an I/O error occurs
