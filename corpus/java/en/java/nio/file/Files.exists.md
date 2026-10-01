---
id: "java-en-function-files-exists"
language: "java"
lang: "en"
category: "function"
name: "Files.exists"
signature: "public static boolean exists(Path path, LinkOption... options)"
title: "Files.exists"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.exists

```java
public static boolean exists(Path path, LinkOption... options)
```

Tests whether a file exists.

 

 The `options` parameter may be used to indicate how symbolic links
 are handled for the case that the file is a symbolic link. By default,
 symbolic links are followed. If the option `NOFOLLOW_LINKS
 NOFOLLOW_LINKS` is present then symbolic links are not followed.

 

 Note that the result of this method is immediately outdated. If this
 method indicates the file exists then there is no guarantee that a
 subsequent access will succeed. Care should be taken when using this
 method in security sensitive applications.

**参数**

- **path** — the path to the file to test
- **options** — options indicating how symbolic links are handled

**返回**

- `true` if the file exists; `false` if the file does not exist or its existence cannot be determined.

**参见**

- #notExists
- FileSystemProvider#checkAccess
