---
id: "java-en-function-securedirectorystream-deletedirectory"
language: "java"
lang: "en"
category: "function"
name: "SecureDirectoryStream.deleteDirectory"
signature: "void deleteDirectory(T path) throws IOException"
title: "SecureDirectoryStream.deleteDirectory"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/SecureDirectoryStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecureDirectoryStream.deleteDirectory

```java
void deleteDirectory(T path) throws IOException
```

Deletes a directory.

 

 Unlike the `delete delete` method, this method
 does not first examine the file to determine if the file is a directory.
 Whether non-directories are deleted by this method is system dependent and
 therefore not specified. When the parameter is a relative path then the
 directory to delete is relative to this open directory.

**参数**

- **path** — the path of the directory to delete

**异常**

- **ClosedDirectoryStreamException** — if the directory stream is closed
- **NoSuchFileException** — if the directory does not exist (optional specific exception)
- **DirectoryNotEmptyException** — if the directory could not otherwise be deleted because it is not empty (optional specific exception)
- **IOException** — if an I/O error occurs
