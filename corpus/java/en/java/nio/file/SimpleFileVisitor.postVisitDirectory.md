---
id: "java-en-function-simplefilevisitor-postvisitdirectory"
language: "java"
lang: "en"
category: "function"
name: "SimpleFileVisitor.postVisitDirectory"
signature: "public FileVisitResult postVisitDirectory(T dir, IOException exc) throws IOException"
title: "SimpleFileVisitor.postVisitDirectory"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/SimpleFileVisitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SimpleFileVisitor.postVisitDirectory

```java
public FileVisitResult postVisitDirectory(T dir, IOException exc) throws IOException
```

Invoked for a directory after entries in the directory, and all of their
 descendants, have been visited.

 

 Unless overridden, this method returns `CONTINUE
 CONTINUE` if the directory iteration completes without an I/O exception;
 otherwise this method re-throws the I/O exception that caused the iteration
 of the directory to terminate prematurely.
