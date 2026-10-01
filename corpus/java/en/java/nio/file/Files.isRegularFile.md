---
id: "java-en-function-files-isregularfile"
language: "java"
lang: "en"
category: "function"
name: "Files.isRegularFile"
signature: "public static boolean isRegularFile(Path path, LinkOption... options)"
title: "Files.isRegularFile"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.isRegularFile

```java
public static boolean isRegularFile(Path path, LinkOption... options)
```

Tests whether a file is a regular file with opaque content.

 

 The `options` array may be used to indicate how symbolic links
 are handled for the case that the file is a symbolic link. By default,
 symbolic links are followed and the file attribute of the final target
 of the link is read. If the option `NOFOLLOW_LINKS
 NOFOLLOW_LINKS` is present then symbolic links are not followed.

 

 Where it is required to distinguish an I/O exception from the case
 that the file is not a regular file then the file attributes can be
 read with the `readAttributes(Path,Class,LinkOption[])
 readAttributes` method and the file type tested with the `isRegularFile` method.

**参数**

- **path** — the path to the file
- **options** — options indicating how symbolic links are handled

**返回**

- `true` if the file is a regular file; `false` if the file does not exist, is not a regular file, or it cannot be determined if the file is a regular file or not.
