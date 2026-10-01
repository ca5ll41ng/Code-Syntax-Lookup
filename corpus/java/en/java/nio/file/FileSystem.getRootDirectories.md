---
id: "java-en-function-filesystem-getrootdirectories"
language: "java"
lang: "en"
category: "function"
name: "FileSystem.getRootDirectories"
signature: "public abstract Iterable<Path> getRootDirectories()"
title: "FileSystem.getRootDirectories"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/FileSystem.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystem.getRootDirectories

```java
public abstract Iterable<Path> getRootDirectories()
```

Returns an object to iterate over the paths of the root directories.

 

 A file system provides access to a file store that may be composed
 of a number of distinct file hierarchies, each with its own top-level
 root directory. Each element in the returned iterator corresponds to the
 root directory of a distinct file hierarchy. The order of the elements is
 not defined. The file hierarchies may change during the lifetime of the
 ava virtual machine.
 For example, in some implementations, the insertion of removable media
 may result in the creation of a new file hierarchy with its own
 top-level directory. There is no guarantee that a root directory
 can be accessed.

**返回**

- An object to iterate over the root directories
