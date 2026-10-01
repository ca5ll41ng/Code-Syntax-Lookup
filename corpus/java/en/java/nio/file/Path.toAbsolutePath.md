---
id: "java-en-function-path-toabsolutepath"
language: "java"
lang: "en"
category: "function"
name: "Path.toAbsolutePath"
signature: "Path toAbsolutePath()"
title: "Path.toAbsolutePath"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Path.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Path.toAbsolutePath

```java
Path toAbsolutePath()
```

Returns a `Path` object representing the absolute path of this
 path. Where this `Path` is associated with the default provider,
 then the returned absolute path will have a non-`null`
 `getRoot root component`.

 

 If this path is already `isAbsolute absolute` then this
 method simply returns this path. Otherwise, this method resolves the path
 in an implementation dependent manner, typically by resolving the path
 against a file system default directory. Depending on the implementation,
 this method may throw an I/O error if the file system is not accessible.

**返回**

- a `Path` object representing the absolute path

**异常**

- **java.io.IOError** — if an I/O error occurs
