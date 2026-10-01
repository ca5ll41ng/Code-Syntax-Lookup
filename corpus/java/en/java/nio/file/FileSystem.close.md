---
id: "java-en-function-filesystem-close"
language: "java"
lang: "en"
category: "function"
name: "FileSystem.close"
signature: "public abstract void close() throws IOException"
title: "FileSystem.close"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/FileSystem.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystem.close

```java
public abstract void close() throws IOException
```

Closes this file system.

 

 After a file system is closed then all subsequent access to the file
 system, either by methods defined by this class or on objects associated
 with this file system, throw `ClosedFileSystemException`. If the
 file system is already closed then invoking this method has no effect.

 

 Closing a file system will close all open `java.nio.channels.Channel channels`, `DirectoryStream directory-streams`,
 `WatchService watch-service`, and other closeable objects associated
 with this file system. The `getDefault default` file
 system cannot be closed.

**异常**

- **IOException** — If an I/O error occurs
- **UnsupportedOperationException** — Thrown in the case of the default file system
