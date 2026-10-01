---
id: "java-en-function-filesystemprovider-copy"
language: "java"
lang: "en"
category: "function"
name: "FileSystemProvider.copy"
signature: "public abstract void copy(Path source, Path target, CopyOption... options) throws IOException"
title: "FileSystemProvider.copy"
directive: "method"
module: "java.base/java.nio.file.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/spi/FileSystemProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystemProvider.copy

```java
public abstract void copy(Path source, Path target, CopyOption... options) throws IOException
```

Copy a file to a target file. This method works in exactly the manner
 specified by the `copy` method
 except that both the source and target paths must be associated with
 this provider.

**参数**

- **source** — the path to the file to copy
- **target** — the path to the target file
- **options** — options specifying how the copy should be done

**异常**

- **UnsupportedOperationException** — if the array contains a copy option that is not supported
- **FileAlreadyExistsException** — if the target file exists but cannot be replaced because the `REPLACE_EXISTING` option is not specified (optional specific exception)
- **DirectoryNotEmptyException** — the `REPLACE_EXISTING` option is specified but the file cannot be replaced because it is a non-empty directory (optional specific exception)
- **IOException** — if an I/O error occurs
