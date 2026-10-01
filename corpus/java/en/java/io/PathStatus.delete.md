---
id: "java-en-function-pathstatus-delete"
language: "java"
lang: "en"
category: "function"
name: "PathStatus.delete"
signature: "public boolean delete()"
title: "PathStatus.delete"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathStatus.delete

```java
public boolean delete()
```

Deletes the file or directory located by this abstract pathname.  If
 this pathname locates a directory, then the directory must be empty in
 order to be deleted.  If this pathname locates a symbolic link, then the
 link itself, not its target, will be deleted.

 

 Note that the `java.nio.file.Files` class defines the `delete(Path) delete` method to throw an `IOException`
 when a file cannot be deleted. This is useful for error reporting and to
 diagnose why a file cannot be deleted.

**返回**

- `true` if and only if the file or directory is successfully deleted; `false` otherwise
