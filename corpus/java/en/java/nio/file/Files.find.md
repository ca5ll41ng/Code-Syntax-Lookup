---
id: "java-en-function-files-find"
language: "java"
lang: "en"
category: "function"
name: "Files.find"
signature: "public static Stream<Path> find(Path start, int maxDepth, BiPredicate<Path, BasicFileAttributes> matcher, FileVisitOption... options) throws IOException"
title: "Files.find"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.find

```java
public static Stream<Path> find(Path start, int maxDepth, BiPredicate<Path, BasicFileAttributes> matcher, FileVisitOption... options) throws IOException
```

Returns a `Stream` that is lazily populated with `Path` by searching for files in a file tree rooted at a given starting
 file.

 

 This method walks the file tree in exactly the manner specified by
 the `walk walk` method. For each file encountered, the given
 `BiPredicate` is invoked with its `Path` and `BasicFileAttributes`. The `Path` object is obtained as if by
 `resolve(Path) resolving` the relative path against `start` and is only included in the returned `Stream` if
 the `BiPredicate` returns true. Compare to calling `filter filter` on the `Stream`
 returned by `walk` method, this method may be more efficient by
 avoiding redundant retrieval of the `BasicFileAttributes`.

 

 The returned stream contains references to one or more open directories.
 The directories are closed by closing the stream.

 

 If an `IOException` is thrown when accessing the directory
 after returned from this method, it is wrapped in an `UncheckedIOException` which will be thrown from the method that caused
 the access to take place.

 This method must be used within a try-with-resources statement or similar
 control structure to ensure that the stream's open directories are closed
 promptly after the stream's operations have completed.

**参数**

- **start** — the starting file
- **maxDepth** — the maximum number of directory levels to search
- **matcher** — the function used to decide whether a file should be included in the returned stream
- **options** — options to configure the traversal

**返回**

- the `Stream` of `Path`

**异常**

- **IllegalArgumentException** — if the `maxDepth` parameter is negative
- **IOException** — if an I/O error is thrown when accessing the starting file.

**参见**

- #walk(Path, int, FileVisitOption...)

> *Since 1.8*
