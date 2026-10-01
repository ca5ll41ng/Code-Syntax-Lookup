---
id: "java-en-function-filevisitor-visitfilefailed"
language: "java"
lang: "en"
category: "function"
name: "FileVisitor.visitFileFailed"
signature: "FileVisitResult visitFileFailed(T file, IOException exc) throws IOException"
title: "FileVisitor.visitFileFailed"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/FileVisitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileVisitor.visitFileFailed

```java
FileVisitResult visitFileFailed(T file, IOException exc) throws IOException
```

Invoked for a file that could not be visited. This method is invoked
 if the file's attributes could not be read, the file is a directory
 that could not be opened, and other reasons.

**参数**

- **file** — a reference to the file
- **exc** — the I/O exception that prevented the file from being visited

**返回**

- the visit result

**异常**

- **IOException** — if an I/O error occurs
