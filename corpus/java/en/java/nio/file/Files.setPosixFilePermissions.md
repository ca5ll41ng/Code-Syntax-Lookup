---
id: "java-en-function-files-setposixfilepermissions"
language: "java"
lang: "en"
category: "function"
name: "Files.setPosixFilePermissions"
signature: "public static Path setPosixFilePermissions(Path path, Set<PosixFilePermission> perms) throws IOException"
title: "Files.setPosixFilePermissions"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.setPosixFilePermissions

```java
public static Path setPosixFilePermissions(Path path, Set<PosixFilePermission> perms) throws IOException
```

Sets a file's POSIX permissions.

 

 The `path` parameter is associated with a `FileSystem`
 that supports the `PosixFileAttributeView`. This attribute view
 provides access to file attributes commonly associated with files on file
 systems used by operating systems that implement the Portable Operating
 System Interface (POSIX) family of standards.

**参数**

- **path** — The path to the file
- **perms** — The new set of permissions

**返回**

- The given path

**异常**

- **UnsupportedOperationException** — if the associated file system does not support the `PosixFileAttributeView`
- **ClassCastException** — if the sets contains elements that are not of type `PosixFilePermission`
- **IOException** — if an I/O error occurs
