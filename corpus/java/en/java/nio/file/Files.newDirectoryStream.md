---
id: "java-en-function-files-newdirectorystream"
language: "java"
lang: "en"
category: "function"
name: "Files.newDirectoryStream"
signature: "public static DirectoryStream<Path> newDirectoryStream(Path dir) throws IOException"
title: "Files.newDirectoryStream"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.newDirectoryStream

```java
public static DirectoryStream<Path> newDirectoryStream(Path dir) throws IOException
```

Opens a directory, returning a `DirectoryStream` to iterate over
 all entries in the directory. The elements returned by the directory
 stream's `iterator iterator` are of type `Path`, each one representing an entry in the directory. The `Path`
 objects are obtained as if by `resolve(Path) resolving` the
 name of the directory entry against `dir`.

 

 When not using the try-with-resources construct, then directory
 stream's `close` method should be invoked after iteration is
 completed so as to free any resources held for the open directory.

 

 When an implementation supports operations on entries in the
 directory that execute in a race-free manner then the returned directory
 stream is a `SecureDirectoryStream`.

**参数**

- **dir** — the path to the directory

**返回**

- a new and open `DirectoryStream` object

**异常**

- **NotDirectoryException** — if the file could not otherwise be opened because it is not a directory (optional specific exception)
- **IOException** — if an I/O error occurs
