---
id: "java-en-function-filesystemprovider-createsymboliclink"
language: "java"
lang: "en"
category: "function"
name: "FileSystemProvider.createSymbolicLink"
signature: "public void createSymbolicLink(Path link, Path target, FileAttribute<?>... attrs) throws IOException"
title: "FileSystemProvider.createSymbolicLink"
directive: "method"
module: "java.base/java.nio.file.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/spi/FileSystemProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystemProvider.createSymbolicLink

```java
public void createSymbolicLink(Path link, Path target, FileAttribute<?>... attrs) throws IOException
```

Creates a symbolic link to a target. This method works in exactly the
 manner specified by the `createSymbolicLink` method.

 

 The default implementation of this method throws `UnsupportedOperationException`.

**参数**

- **link** — the path of the symbolic link to create
- **target** — the target of the symbolic link
- **attrs** — the array of attributes to set atomically when creating the symbolic link

**异常**

- **UnsupportedOperationException** — if the implementation does not support symbolic links or the array contains an attribute that cannot be set atomically when creating the symbolic link
- **FileAlreadyExistsException** — if a file with the name already exists (optional specific exception)
- **IOException** — if an I/O error occurs
