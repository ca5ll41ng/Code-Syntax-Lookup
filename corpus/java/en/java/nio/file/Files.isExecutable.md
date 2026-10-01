---
id: "java-en-function-files-isexecutable"
language: "java"
lang: "en"
category: "function"
name: "Files.isExecutable"
signature: "public static boolean isExecutable(Path path)"
title: "Files.isExecutable"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.isExecutable

```java
public static boolean isExecutable(Path path)
```

Tests whether a file is executable. This method checks that a file exists
 and that this Java virtual machine has appropriate privileges to `exec execute` the file. The semantics may differ when checking
 access to a directory. For example, on UNIX systems, checking for
 execute access checks that the Java virtual machine has permission to
 search the directory in order to access file or subdirectories.

 

 Depending on the implementation, this method may require to read file
 permissions, access control lists, or other file attributes in order to
 check the effective access to the file. Consequently, this method may not
 be atomic with respect to other file system operations.

 

 Note that the result of this method is immediately outdated, there is
 no guarantee that a subsequent attempt to execute the file will succeed
 (or even that it will access the same file). Care should be taken when
 using this method in security sensitive applications.

**参数**

- **path** — the path to the file to check

**返回**

- `true` if the file exists and is executable; `false` if the file does not exist, execute access would be denied because the Java virtual machine has insufficient privileges, or access cannot be determined
