---
id: "java-en-function-filesystemprovider-createdirectory"
language: "java"
lang: "en"
category: "function"
name: "FileSystemProvider.createDirectory"
signature: "public abstract void createDirectory(Path dir, FileAttribute<?>... attrs) throws IOException"
title: "FileSystemProvider.createDirectory"
directive: "method"
module: "java.base/java.nio.file.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/spi/FileSystemProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystemProvider.createDirectory

```java
public abstract void createDirectory(Path dir, FileAttribute<?>... attrs) throws IOException
```

Creates a new directory. This method works in exactly the manner
 specified by the `createDirectory` method.

**参数**

- **dir** — the directory to create
- **attrs** — an optional list of file attributes to set atomically when creating the directory

**异常**

- **UnsupportedOperationException** — if the array contains an attribute that cannot be set atomically when creating the directory
- **FileAlreadyExistsException** — if a directory could not otherwise be created because a file of that name already exists (optional specific exception)
- **IOException** — if an I/O error occurs or the parent directory does not exist
