---
id: "java-en-function-filevisitor-previsitdirectory"
language: "java"
lang: "en"
category: "function"
name: "FileVisitor.preVisitDirectory"
signature: "FileVisitResult preVisitDirectory(T dir, BasicFileAttributes attrs) throws IOException"
title: "FileVisitor.preVisitDirectory"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/FileVisitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileVisitor.preVisitDirectory

```java
FileVisitResult preVisitDirectory(T dir, BasicFileAttributes attrs) throws IOException
```

Invoked for a directory before entries in the directory are visited.

 

 If this method returns `CONTINUE CONTINUE`,
 then entries in the directory are visited. If this method returns `SKIP_SUBTREE SKIP_SUBTREE` or `SKIP_SIBLINGS SKIP_SIBLINGS` then entries in the
 directory (and any descendants) will not be visited.

**参数**

- **dir** — a reference to the directory
- **attrs** — the directory's basic attributes

**返回**

- the visit result

**异常**

- **IOException** — if an I/O error occurs
