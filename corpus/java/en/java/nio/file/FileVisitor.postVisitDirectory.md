---
id: "java-en-function-filevisitor-postvisitdirectory"
language: "java"
lang: "en"
category: "function"
name: "FileVisitor.postVisitDirectory"
signature: "FileVisitResult postVisitDirectory(T dir, IOException exc) throws IOException"
title: "FileVisitor.postVisitDirectory"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/FileVisitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileVisitor.postVisitDirectory

```java
FileVisitResult postVisitDirectory(T dir, IOException exc) throws IOException
```

Invoked for a directory after entries in the directory, and all of their
 descendants, have been visited. This method is also invoked when iteration
 of the directory completes prematurely (by a `visitFile visitFile`
 method returning `SKIP_SIBLINGS SKIP_SIBLINGS`,
 or an I/O error when iterating over the directory).

**参数**

- **dir** — a reference to the directory
- **exc** — `null` if the iteration of the directory completes without an error; otherwise the I/O exception that caused the iteration of the directory to complete prematurely

**返回**

- the visit result

**异常**

- **IOException** — if an I/O error occurs
