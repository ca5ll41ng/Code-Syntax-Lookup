---
id: "java-en-function-filevisitor-visitfile"
language: "java"
lang: "en"
category: "function"
name: "FileVisitor.visitFile"
signature: "FileVisitResult visitFile(T file, BasicFileAttributes attrs) throws IOException"
title: "FileVisitor.visitFile"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/FileVisitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileVisitor.visitFile

```java
FileVisitResult visitFile(T file, BasicFileAttributes attrs) throws IOException
```

Invoked for a file in a directory.

**参数**

- **file** — a reference to the file
- **attrs** — the file's basic attributes

**返回**

- the visit result

**异常**

- **IOException** — if an I/O error occurs
