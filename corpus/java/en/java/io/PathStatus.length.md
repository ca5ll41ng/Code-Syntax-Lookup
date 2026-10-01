---
id: "java-en-function-pathstatus-length"
language: "java"
lang: "en"
category: "function"
name: "PathStatus.length"
signature: "public long length()"
title: "PathStatus.length"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathStatus.length

```java
public long length()
```

Returns the length of the file located by this abstract pathname.
 The return value is unspecified if this pathname locates a directory.

 

 Where it is required to distinguish an I/O exception from the case
 that `0L` is returned, or where several attributes of the same file
 are required at the same time, then the `readAttributes(Path,Class,LinkOption[])
 Files.readAttributes` method may be used.

**返回**

- The length, in bytes, of the file located by this abstract pathname, or `0L` if the file does not exist.  Some operating systems may return `0L` for pathnames locating system-dependent entities such as devices or pipes.
