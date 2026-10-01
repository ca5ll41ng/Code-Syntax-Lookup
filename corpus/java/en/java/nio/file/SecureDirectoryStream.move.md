---
id: "java-en-function-securedirectorystream-move"
language: "java"
lang: "en"
category: "function"
name: "SecureDirectoryStream.move"
signature: "void move(T srcpath, SecureDirectoryStream<T> targetdir, T targetpath) throws IOException"
title: "SecureDirectoryStream.move"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/SecureDirectoryStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecureDirectoryStream.move

```java
void move(T srcpath, SecureDirectoryStream<T> targetdir, T targetpath) throws IOException
```

Move a file from this directory to another directory.

 

 This method works in a similar manner to `move Files.move`
 when the `ATOMIC_MOVE ATOMIC_MOVE` option
 is specified. That is, this method moves a file as an atomic file system
 operation. If the `srcpath` parameter is an `isAbsolute
 absolute` path then it locates the source file. If the parameter is a
 relative path then it is located relative to this open directory. If
 the `targetpath` parameter is absolute then it locates the target
 file (the `targetdir` parameter is ignored). If the parameter is
 a relative path it is located relative to the open directory identified
 by the `targetdir` parameter, unless `targetdir` is
 `null`, in which case it is located relative to the current
 working directory. In all cases, if the target file exists then it is
 implementation specific if it is replaced or this method fails.

**参数**

- **srcpath** — the name of the file to move
- **targetdir** — the destination directory; can be `null`
- **targetpath** — the name to give the file in the destination directory

**异常**

- **ClosedDirectoryStreamException** — if this or the target directory stream is closed
- **FileAlreadyExistsException** — if the file already exists in the target directory and cannot be replaced (optional specific exception)
- **AtomicMoveNotSupportedException** — if the file cannot be moved as an atomic file system operation
- **IOException** — if an I/O error occurs
