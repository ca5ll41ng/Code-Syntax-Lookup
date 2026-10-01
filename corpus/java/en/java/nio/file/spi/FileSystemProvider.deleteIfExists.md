---
id: "java-en-function-filesystemprovider-deleteifexists"
language: "java"
lang: "en"
category: "function"
name: "FileSystemProvider.deleteIfExists"
signature: "public boolean deleteIfExists(Path path) throws IOException"
title: "FileSystemProvider.deleteIfExists"
directive: "method"
module: "java.base/java.nio.file.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/spi/FileSystemProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystemProvider.deleteIfExists

```java
public boolean deleteIfExists(Path path) throws IOException
```

Deletes a file if it exists. This method works in exactly the manner
 specified by the `deleteIfExists` method.

 

 The default implementation of this method simply invokes `delete` ignoring the `NoSuchFileException` when the file does not
 exist. It may be overridden where appropriate.

**参数**

- **path** — the path to the file to delete

**返回**

- `true` if the file was deleted by this method; `false` if the file could not be deleted because it did not exist

**异常**

- **DirectoryNotEmptyException** — if the file is a directory and could not otherwise be deleted because the directory is not empty (optional specific exception)
- **IOException** — if an I/O error occurs
