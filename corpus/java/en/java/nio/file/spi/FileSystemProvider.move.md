---
id: "java-en-function-filesystemprovider-move"
language: "java"
lang: "en"
category: "function"
name: "FileSystemProvider.move"
signature: "public abstract void move(Path source, Path target, CopyOption... options) throws IOException"
title: "FileSystemProvider.move"
directive: "method"
module: "java.base/java.nio.file.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/spi/FileSystemProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystemProvider.move

```java
public abstract void move(Path source, Path target, CopyOption... options) throws IOException
```

Move or rename a file to a target file. This method works in exactly the
 manner specified by the `move` method except that both the
 source and target paths must be associated with this provider.

**参数**

- **source** — the path to the file to move
- **target** — the path to the target file
- **options** — options specifying how the move should be done

**异常**

- **UnsupportedOperationException** — if the array contains a copy option that is not supported
- **FileAlreadyExistsException** — if the target file exists but cannot be replaced because the `REPLACE_EXISTING` option is not specified (optional specific exception)
- **DirectoryNotEmptyException** — the `REPLACE_EXISTING` option is specified but the file cannot be replaced because it is a non-empty directory (optional specific exception)
- **AtomicMoveNotSupportedException** — if the options array contains the `ATOMIC_MOVE` option but the file cannot be moved as an atomic file system operation.
- **IOException** — if an I/O error occurs
