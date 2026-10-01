---
id: "java-en-function-basicfileattributes-filekey"
language: "java"
lang: "en"
category: "function"
name: "BasicFileAttributes.fileKey"
signature: "Object fileKey()"
title: "BasicFileAttributes.fileKey"
directive: "method"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/BasicFileAttributes.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BasicFileAttributes.fileKey

```java
Object fileKey()
```

Returns an object that uniquely identifies the given file, or `null` if a file key is not available. On some platforms or file systems
 it is possible to use an identifier, or a combination of identifiers to
 uniquely identify a file. Such identifiers are important for operations
 such as file tree traversal in file systems that support symbolic links or file systems
 that allow a file to be an entry in more than one directory. On UNIX file
 systems, for example, the device ID and inode are
 commonly used for such purposes.

 

 The file key returned by this method can only be guaranteed to be
 unique if the file system and files remain static. Whether a file system
 re-uses identifiers after a file is deleted is implementation dependent and
 therefore unspecified.

 

 File keys returned by this method can be compared for equality and are
 suitable for use in collections. If the file system and files remain static,
 and two files are the `isSameFile same` with
 non-`null` file keys, then their file keys are equal.

**返回**

- an object that uniquely identifies the given file, or `null`

**参见**

- java.nio.file.Files#walkFileTree
