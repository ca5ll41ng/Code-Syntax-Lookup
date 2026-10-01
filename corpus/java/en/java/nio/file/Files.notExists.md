---
id: "java-en-function-files-notexists"
language: "java"
lang: "en"
category: "function"
name: "Files.notExists"
signature: "public static boolean notExists(Path path, LinkOption... options)"
title: "Files.notExists"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.notExists

```java
public static boolean notExists(Path path, LinkOption... options)
```

Tests whether the file located by this path does not exist. This method
 is intended for cases where it is required to take action when it can be
 confirmed that a file does not exist.

 

 The `options` parameter may be used to indicate how symbolic links
 are handled for the case that the file is a symbolic link. By default,
 symbolic links are followed. If the option `NOFOLLOW_LINKS
 NOFOLLOW_LINKS` is present then symbolic links are not followed.

 

 Note that this method is not the complement of the `exists
 exists` method. Where it is not possible to determine if a file exists
 or not then both methods return `false`. As with the `exists`
 method, the result of this method is immediately outdated. If this
 method indicates the file does exist then there is no guarantee that a
 subsequent attempt to create the file will succeed. Care should be taken
 when using this method in security sensitive applications.

**参数**

- **path** — the path to the file to test
- **options** — options indicating how symbolic links are handled

**返回**

- `true` if the file does not exist; `false` if the file exists or its existence cannot be determined
