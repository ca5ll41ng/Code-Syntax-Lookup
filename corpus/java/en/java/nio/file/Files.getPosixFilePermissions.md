---
id: "java-en-function-files-getposixfilepermissions"
language: "java"
lang: "en"
category: "function"
name: "Files.getPosixFilePermissions"
signature: "public static Set<PosixFilePermission> getPosixFilePermissions(Path path, LinkOption... options) throws IOException"
title: "Files.getPosixFilePermissions"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.getPosixFilePermissions

```java
public static Set<PosixFilePermission> getPosixFilePermissions(Path path, LinkOption... options) throws IOException
```

Returns a file's POSIX file permissions.

 

 The `path` parameter is associated with a `FileSystem`
 that supports the `PosixFileAttributeView`. This attribute view
 provides access to file attributes commonly associated with files on file
 systems used by operating systems that implement the Portable Operating
 System Interface (POSIX) family of standards.

 

 The `options` array may be used to indicate how symbolic links
 are handled for the case that the file is a symbolic link. By default,
 symbolic links are followed and the file attribute of the final target
 of the link is read. If the option `NOFOLLOW_LINKS
 NOFOLLOW_LINKS` is present then symbolic links are not followed.

**参数**

- **path** — the path to the file
- **options** — options indicating how symbolic links are handled

**返回**

- the file permissions

**异常**

- **UnsupportedOperationException** — if the associated file system does not support the `PosixFileAttributeView`
- **IOException** — if an I/O error occurs
