---
id: "java-en-function-filesystemprovider-delete"
language: "java"
lang: "en"
category: "function"
name: "FileSystemProvider.delete"
signature: "public abstract void delete(Path path) throws IOException"
title: "FileSystemProvider.delete"
directive: "method"
module: "java.base/java.nio.file.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/spi/FileSystemProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystemProvider.delete

```java
public abstract void delete(Path path) throws IOException
```

Deletes a file. This method works in exactly the  manner specified by the
 `delete` method.

**参数**

- **path** — the path to the file to delete

**异常**

- **NoSuchFileException** — if the file does not exist (optional specific exception)
- **DirectoryNotEmptyException** — if the file is a directory and could not otherwise be deleted because the directory is not empty (optional specific exception)
- **IOException** — if an I/O error occurs
