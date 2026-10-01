---
id: "java-en-function-filesystemprovider-createlink"
language: "java"
lang: "en"
category: "function"
name: "FileSystemProvider.createLink"
signature: "public void createLink(Path link, Path existing) throws IOException"
title: "FileSystemProvider.createLink"
directive: "method"
module: "java.base/java.nio.file.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/spi/FileSystemProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystemProvider.createLink

```java
public void createLink(Path link, Path existing) throws IOException
```

Creates a new link (directory entry) for an existing file. This method
 works in exactly the manner specified by the `createLink`
 method.

 

 The default implementation of this method throws `UnsupportedOperationException`.

**参数**

- **link** — the link (directory entry) to create
- **existing** — a path to an existing file

**异常**

- **UnsupportedOperationException** — if the implementation does not support adding an existing file to a directory
- **FileAlreadyExistsException** — if the entry could not otherwise be created because a file of that name already exists (optional specific exception)
- **IOException** — if an I/O error occurs
