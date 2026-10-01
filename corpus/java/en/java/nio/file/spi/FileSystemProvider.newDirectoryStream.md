---
id: "java-en-function-filesystemprovider-newdirectorystream"
language: "java"
lang: "en"
category: "function"
name: "FileSystemProvider.newDirectoryStream"
signature: "public abstract DirectoryStream<Path> newDirectoryStream(Path dir, DirectoryStream.Filter<? super Path> filter) throws IOException"
title: "FileSystemProvider.newDirectoryStream"
directive: "method"
module: "java.base/java.nio.file.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/spi/FileSystemProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystemProvider.newDirectoryStream

```java
public abstract DirectoryStream<Path> newDirectoryStream(Path dir, DirectoryStream.Filter<? super Path> filter) throws IOException
```

Opens a directory, returning a `DirectoryStream` to iterate over
 the entries in the directory. This method works in exactly the manner
 specified by the `newDirectoryStream`
 method.

**参数**

- **dir** — the path to the directory
- **filter** — the directory stream filter

**返回**

- a new and open `DirectoryStream` object

**异常**

- **NotDirectoryException** — if the file could not otherwise be opened because it is not a directory (optional specific exception)
- **IOException** — if an I/O error occurs
