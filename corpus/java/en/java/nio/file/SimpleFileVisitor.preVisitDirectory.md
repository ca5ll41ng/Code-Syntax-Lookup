---
id: "java-en-function-simplefilevisitor-previsitdirectory"
language: "java"
lang: "en"
category: "function"
name: "SimpleFileVisitor.preVisitDirectory"
signature: "public FileVisitResult preVisitDirectory(T dir, BasicFileAttributes attrs) throws IOException"
title: "SimpleFileVisitor.preVisitDirectory"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/SimpleFileVisitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SimpleFileVisitor.preVisitDirectory

```java
public FileVisitResult preVisitDirectory(T dir, BasicFileAttributes attrs) throws IOException
```

Invoked for a directory before entries in the directory are visited.

 

 Unless overridden, this method returns `CONTINUE
 CONTINUE`.
