---
id: "java-en-function-files-createlink"
language: "java"
lang: "en"
category: "function"
name: "Files.createLink"
signature: "public static Path createLink(Path link, Path existing) throws IOException"
title: "Files.createLink"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.createLink

```java
public static Path createLink(Path link, Path existing) throws IOException
```

Creates a new link (directory entry) for an existing file,
 failing if `link` locates an existing file (optional
 operation).

 

 The `link` parameter locates the directory entry to create.
 The `existing` parameter is the path to an existing file. This
 method creates a new directory entry for the file so that it can be
 accessed using `link` as the path. On some file systems this is
 known as creating a "hard link". If the `existing` parameter
 is the path to a symbolic link, then whether the new link is for the
 target of the symbolic link or for the symbolic link itself is platform
 dependent and therefore not specified. Whether the file attributes are
 maintained for the file or for each directory entry is file system
 specific and therefore not specified. Typically, a file system requires
 that all links (directory entries) for a file be on the same file system.
 Furthermore, on some platforms, the Java virtual machine may require to
 be started with implementation specific privileges to create hard links
 or to create links to directories.

**参数**

- **link** — the link (directory entry) to create
- **existing** — a path to an existing file

**返回**

- the path to the link (directory entry)

**异常**

- **UnsupportedOperationException** — if the implementation does not support adding an existing file to a directory
- **FileAlreadyExistsException** — if `link` locates an existing file (optional specific exception)
- **IOException** — if an I/O error occurs
