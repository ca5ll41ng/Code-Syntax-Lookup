---
id: "java-en-function-files-list"
language: "java"
lang: "en"
category: "function"
name: "Files.list"
signature: "public static Stream<Path> list(Path dir) throws IOException"
title: "Files.list"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.list

```java
public static Stream<Path> list(Path dir) throws IOException
```

Returns a lazily populated `Stream`, the elements of
 which are the entries in the directory.  The listing is not recursive.

 

 The elements of the stream are `Path` objects that are
 obtained as if by `resolve(Path) resolving` the name of the
 directory entry against `dir`. Some file systems maintain special
 links to the directory itself and the directory's parent directory.
 Entries representing these links are not included.

 

 The stream is weakly consistent. It is thread safe but does
 not freeze the directory while iterating, so it may (or may not)
 reflect updates to the directory that occur after returning from this
 method.

 

 The returned stream contains a reference to an open directory.
 The directory is closed by closing the stream.

 

 Operating on a closed stream behaves as if the end of stream
 has been reached. Due to read-ahead, one or more elements may be
 returned after the stream has been closed.

 

 If an `IOException` is thrown when accessing the directory
 after this method has returned, it is wrapped in an `UncheckedIOException` which will be thrown from the method that caused
 the access to take place.

 This method must be used within a try-with-resources statement or similar
 control structure to ensure that the stream's open directory is closed
 promptly after the stream's operations have completed.

**参数**

- **dir** — The path to the directory

**返回**

- The `Stream` describing the content of the directory

**异常**

- **NotDirectoryException** — if the file could not otherwise be opened because it is not a directory (optional specific exception)
- **IOException** — if an I/O error occurs when opening the directory

**参见**

- #newDirectoryStream(Path)

> *Since 1.8*
