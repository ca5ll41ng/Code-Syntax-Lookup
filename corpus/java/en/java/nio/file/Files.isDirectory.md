---
id: "java-en-function-files-isdirectory"
language: "java"
lang: "en"
category: "function"
name: "Files.isDirectory"
signature: "public static boolean isDirectory(Path path, LinkOption... options)"
title: "Files.isDirectory"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.isDirectory

```java
public static boolean isDirectory(Path path, LinkOption... options)
```

Tests whether a file is a directory.

 

 The `options` array may be used to indicate how symbolic links
 are handled for the case that the file is a symbolic link. By default,
 symbolic links are followed and the file attribute of the final target
 of the link is read. If the option `NOFOLLOW_LINKS
 NOFOLLOW_LINKS` is present then symbolic links are not followed.

 

 Where it is required to distinguish an I/O exception from the case
 that the file is not a directory then the file attributes can be
 read with the `readAttributes(Path,Class,LinkOption[])
 readAttributes` method and the file type tested with the `isDirectory` method.

**参数**

- **path** — the path to the file to test
- **options** — options indicating how symbolic links are handled

**返回**

- `true` if the file is a directory; `false` if the file does not exist, is not a directory, or it cannot be determined if the file is a directory or not.
