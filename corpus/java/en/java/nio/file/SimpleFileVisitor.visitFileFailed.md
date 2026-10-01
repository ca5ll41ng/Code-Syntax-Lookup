---
id: "java-en-function-simplefilevisitor-visitfilefailed"
language: "java"
lang: "en"
category: "function"
name: "SimpleFileVisitor.visitFileFailed"
signature: "public FileVisitResult visitFileFailed(T file, IOException exc) throws IOException"
title: "SimpleFileVisitor.visitFileFailed"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/SimpleFileVisitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SimpleFileVisitor.visitFileFailed

```java
public FileVisitResult visitFileFailed(T file, IOException exc) throws IOException
```

Invoked for a file that could not be visited.

 

 Unless overridden, this method re-throws the I/O exception that prevented
 the file from being visited.
