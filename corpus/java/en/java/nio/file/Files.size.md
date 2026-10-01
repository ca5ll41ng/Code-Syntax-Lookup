---
id: "java-en-function-files-size"
language: "java"
lang: "en"
category: "function"
name: "Files.size"
signature: "public static long size(Path path) throws IOException"
title: "Files.size"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.size

```java
public static long size(Path path) throws IOException
```

Returns the size of a file (in bytes). The size may differ from the
 actual size on the file system due to compression, support for sparse
 files, or other reasons. The size of files that are not `isRegularFile regular` files is implementation specific and
 therefore unspecified.

**参数**

- **path** — the path to the file

**返回**

- the file size, in bytes

**异常**

- **IOException** — if an I/O error occurs

**参见**

- BasicFileAttributes#size
