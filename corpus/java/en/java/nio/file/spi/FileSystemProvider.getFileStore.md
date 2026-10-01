---
id: "java-en-function-filesystemprovider-getfilestore"
language: "java"
lang: "en"
category: "function"
name: "FileSystemProvider.getFileStore"
signature: "public abstract FileStore getFileStore(Path path) throws IOException"
title: "FileSystemProvider.getFileStore"
directive: "method"
module: "java.base/java.nio.file.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/spi/FileSystemProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystemProvider.getFileStore

```java
public abstract FileStore getFileStore(Path path) throws IOException
```

Returns the `FileStore` representing the file store where a file
 is located. This method works in exactly the manner specified by the
 `getFileStore` method.

**参数**

- **path** — the path to the file

**返回**

- the file store where the file is stored

**异常**

- **IOException** — if an I/O error occurs
