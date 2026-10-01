---
id: "java-en-function-basicfileattributes-size"
language: "java"
lang: "en"
category: "function"
name: "BasicFileAttributes.size"
signature: "long size()"
title: "BasicFileAttributes.size"
directive: "method"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/BasicFileAttributes.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BasicFileAttributes.size

```java
long size()
```

Returns the size of the file (in bytes). The size may differ from the
 actual size on the file system due to compression, support for sparse
 files, or other reasons. The size of files that are not `isRegularFile regular` files is implementation specific and
 therefore unspecified.

**返回**

- the file size, in bytes
