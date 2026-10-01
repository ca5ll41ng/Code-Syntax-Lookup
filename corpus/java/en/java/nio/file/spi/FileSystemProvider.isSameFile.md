---
id: "java-en-function-filesystemprovider-issamefile"
language: "java"
lang: "en"
category: "function"
name: "FileSystemProvider.isSameFile"
signature: "public abstract boolean isSameFile(Path path, Path path2) throws IOException"
title: "FileSystemProvider.isSameFile"
directive: "method"
module: "java.base/java.nio.file.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/spi/FileSystemProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystemProvider.isSameFile

```java
public abstract boolean isSameFile(Path path, Path path2) throws IOException
```

Tests if two paths locate the same file. This method works in exactly the
 manner specified by the `isSameFile` method.

**参数**

- **path** — one path to the file
- **path2** — the other path

**返回**

- `true` if, and only if, the two paths locate the same file

**异常**

- **IOException** — if an I/O error occurs
