---
id: "java-en-function-filesystemprovider-readsymboliclink"
language: "java"
lang: "en"
category: "function"
name: "FileSystemProvider.readSymbolicLink"
signature: "public Path readSymbolicLink(Path link) throws IOException"
title: "FileSystemProvider.readSymbolicLink"
directive: "method"
module: "java.base/java.nio.file.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/spi/FileSystemProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystemProvider.readSymbolicLink

```java
public Path readSymbolicLink(Path link) throws IOException
```

Reads the target of a symbolic link. This method works in exactly the
 manner specified by the `readSymbolicLink` method.

 

 The default implementation of this method throws `UnsupportedOperationException`.

**参数**

- **link** — the path to the symbolic link

**返回**

- The target of the symbolic link

**异常**

- **UnsupportedOperationException** — if the implementation does not support symbolic links
- **NotLinkException** — if the target could otherwise not be read because the file is not a symbolic link (optional specific exception)
- **IOException** — if an I/O error occurs
