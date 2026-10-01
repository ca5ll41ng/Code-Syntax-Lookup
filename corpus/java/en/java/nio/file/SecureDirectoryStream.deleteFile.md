---
id: "java-en-function-securedirectorystream-deletefile"
language: "java"
lang: "en"
category: "function"
name: "SecureDirectoryStream.deleteFile"
signature: "void deleteFile(T path) throws IOException"
title: "SecureDirectoryStream.deleteFile"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/SecureDirectoryStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecureDirectoryStream.deleteFile

```java
void deleteFile(T path) throws IOException
```

Deletes a file.

 

 Unlike the `delete delete` method, this method does
 not first examine the file to determine if the file is a directory.
 Whether a directory is deleted by this method is system dependent and
 therefore not specified. If the file is a symbolic link, then the link
 itself, not the final target of the link, is deleted. When the
 parameter is a relative path then the file to delete is relative to
 this open directory.

**参数**

- **path** — the path of the file to delete

**异常**

- **ClosedDirectoryStreamException** — if the directory stream is closed
- **NoSuchFileException** — if the file does not exist (optional specific exception)
- **IOException** — if an I/O error occurs
