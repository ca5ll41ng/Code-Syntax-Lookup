---
id: "java-en-function-simplefilevisitor-visitfile"
language: "java"
lang: "en"
category: "function"
name: "SimpleFileVisitor.visitFile"
signature: "public FileVisitResult visitFile(T file, BasicFileAttributes attrs) throws IOException"
title: "SimpleFileVisitor.visitFile"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/SimpleFileVisitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SimpleFileVisitor.visitFile

```java
public FileVisitResult visitFile(T file, BasicFileAttributes attrs) throws IOException
```

Invoked for a file in a directory.

 

 Unless overridden, this method returns `CONTINUE
 CONTINUE`.
