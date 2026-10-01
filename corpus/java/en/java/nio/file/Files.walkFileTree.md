---
id: "java-en-function-files-walkfiletree"
language: "java"
lang: "en"
category: "function"
name: "Files.walkFileTree"
signature: "public static Path walkFileTree(Path start, Set<FileVisitOption> options, int maxDepth, FileVisitor<? super Path> visitor) throws IOException"
title: "Files.walkFileTree"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.walkFileTree

```java
public static Path walkFileTree(Path start, Set<FileVisitOption> options, int maxDepth, FileVisitor<? super Path> visitor) throws IOException
```

Walks a file tree.

 

 This method walks a file tree rooted at a given starting file. The
 file tree traversal is depth-first with the given `FileVisitor` invoked for each file encountered. File tree traversal
 completes when all accessible files in the tree have been visited, or a
 visit method returns a result of `TERMINATE
 TERMINATE`. Where a visit method terminates due an `IOException`,
 an uncaught error, or runtime exception, then the traversal is terminated
 and the error or exception is propagated to the caller of this method.

 

 For each file encountered this method attempts to read its `java.nio.file.attribute.BasicFileAttributes`. If the file is not a
 directory then the `visitFile visitFile` method is
 invoked with the file attributes. If the file attributes cannot be read,
 due to an I/O exception, then the `visitFileFailed
 visitFileFailed` method is invoked with the I/O exception.

 

 Where the file is a directory, and the directory could not be opened,
 then the `visitFileFailed` method is invoked with the I/O exception,
 after which, the file tree walk continues, by default, at the next
 sibling of the directory.

 

 Where the directory is opened successfully, then the entries in the
 directory, and their descendants are visited. When all entries
 have been visited, or an I/O error occurs during iteration of the
 directory, then the directory is closed and the visitor's `postVisitDirectory postVisitDirectory` method is invoked.
 The file tree walk then continues, by default, at the next sibling
 of the directory.

 

 By default, symbolic links are not automatically followed by this
 method. If the `options` parameter contains the `FOLLOW_LINKS FOLLOW_LINKS` option then symbolic links are
 followed. When following links, and the attributes of the target cannot
 be read, then this method attempts to get the `BasicFileAttributes`
 of the link. If they can be read then the `visitFile` method is
 invoked with the attributes of the link (otherwise the `visitFileFailed`
 method is invoked as specified above).

 

 If the `options` parameter contains the `FOLLOW_LINKS FOLLOW_LINKS` option then this method keeps
 track of directories visited so that cycles can be detected. A cycle
 arises when there is an entry in a directory that is an ancestor of the
 directory. Cycle detection is done by recording the `fileKey file-key` of directories,
 or if file keys are not available, by invoking the `isSameFile
 isSameFile` method to test if a directory is the same file as an
 ancestor. When a cycle is detected it is treated as an I/O error, and the
 `visitFileFailed visitFileFailed` method is invoked with
 an instance of `FileSystemLoopException`.

 

 The `maxDepth` parameter is the maximum number of levels of
 directories to visit. A value of `0` means that only the starting
 file is visited. A value of `MAX_VALUE MAX_VALUE` may be used
 to indicate that all levels should be visited. The `visitFile` method
 is invoked for all files, including directories, encountered at `maxDepth`,
 unless the basic file attributes cannot be read, in which case the `visitFileFailed` method is invoked.

 

 If a visitor returns a result of `null` then `NullPointerException` is thrown.

**参数**

- **start** — the starting file
- **options** — options to configure the traversal
- **maxDepth** — the maximum number of directory levels to visit
- **visitor** — the file visitor to invoke for each file

**返回**

- the starting file

**异常**

- **IllegalArgumentException** — if the `maxDepth` parameter is negative
- **IOException** — if an I/O error is thrown by a visitor method
