---
id: "java-en-function-files-walk"
language: "java"
lang: "en"
category: "function"
name: "Files.walk"
signature: "public static Stream<Path> walk(Path start, int maxDepth, FileVisitOption... options) throws IOException"
title: "Files.walk"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.walk

```java
public static Stream<Path> walk(Path start, int maxDepth, FileVisitOption... options) throws IOException
```

Returns a `Stream` that is lazily populated with `Path` by walking the file tree rooted at a given starting file.  The
 file tree is traversed depth-first with a directory visited
 before the entries in that directory. The elements in the stream are
 `Path` objects that are obtained as if by `resolve(Path)
 resolving` the relative path against `start`.

 

 The `stream` walks the file tree as elements are consumed.
 The `Stream` returned is guaranteed to have at least one
 element, the starting file itself. For each file visited, the stream
 attempts to read its `BasicFileAttributes`. If the file is a
 directory and can be opened successfully, entries in the directory, and
 their descendants will follow the directory in the stream as
 they are encountered. When all entries have been visited, then the
 directory is closed. The file tree walk then continues at the next
 sibling of the directory.

 

 The stream is weakly consistent. It does not freeze the
 file tree while iterating, so it may (or may not) reflect updates to
 the file tree that occur after returned from this method.

 

 By default, symbolic links are not automatically followed by this
 method. If the `options` parameter contains the `FOLLOW_LINKS FOLLOW_LINKS` option then symbolic links are
 followed. When following links, and the attributes of the target cannot
 be read, then this method attempts to get the `BasicFileAttributes`
 of the link.

 

 If the `options` parameter contains the `FOLLOW_LINKS FOLLOW_LINKS` option then the stream keeps
 track of directories visited so that cycles can be detected. A cycle
 arises when there is an entry in a directory that is an ancestor of the
 directory. Cycle detection is done by recording the `fileKey file-key` of directories,
 or if file keys are not available, by invoking the `isSameFile
 isSameFile` method to test if a directory is the same file as an
 ancestor. When a cycle is detected it is treated as an I/O error with
 an instance of `FileSystemLoopException`.

 

 The `maxDepth` parameter is the maximum number of levels of
 directories to visit. A value of `0` means that only the starting
 file is visited. A value of `MAX_VALUE MAX_VALUE` may be used
 to indicate that all levels should be visited.

 

 The returned stream contains references to one or more open directories.
 The directories are closed by closing the stream.

 

 If an `IOException` is thrown when accessing the directory
 after this method has returned, it is wrapped in an `UncheckedIOException` which will be thrown from the method that caused
 the access to take place.

 This method must be used within a try-with-resources statement or similar
 control structure to ensure that the stream's open directories are closed
 promptly after the stream's operations have completed.

**参数**

- **start** — the starting file
- **maxDepth** — the maximum number of directory levels to visit
- **options** — options to configure the traversal

**返回**

- the `Stream` of `Path`

**异常**

- **IllegalArgumentException** — if the `maxDepth` parameter is negative
- **IOException** — if an I/O error is thrown when accessing the starting file.

> *Since 1.8*
