---
id: "java-en-function-files-getlastmodifiedtime"
language: "java"
lang: "en"
category: "function"
name: "Files.getLastModifiedTime"
signature: "public static FileTime getLastModifiedTime(Path path, LinkOption... options) throws IOException"
title: "Files.getLastModifiedTime"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.getLastModifiedTime

```java
public static FileTime getLastModifiedTime(Path path, LinkOption... options) throws IOException
```

Returns a file's last modified time.

 

 The `options` array may be used to indicate how symbolic links
 are handled for the case that the file is a symbolic link. By default,
 symbolic links are followed and the file attribute of the final target
 of the link is read. If the option `NOFOLLOW_LINKS
 NOFOLLOW_LINKS` is present then symbolic links are not followed.

**参数**

- **path** — the path to the file
- **options** — options indicating how symbolic links are handled

**返回**

- a `FileTime` representing the time the file was last modified, or an implementation specific default when a time stamp to indicate the time of last modification is not supported by the file system

**异常**

- **IOException** — if an I/O error occurs

**参见**

- BasicFileAttributes#lastModifiedTime
