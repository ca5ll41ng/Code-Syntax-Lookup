---
id: "java-en-function-basicfileattributeview-readattributes"
language: "java"
lang: "en"
category: "function"
name: "BasicFileAttributeView.readAttributes"
signature: "BasicFileAttributes readAttributes() throws IOException"
title: "BasicFileAttributeView.readAttributes"
directive: "method"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/BasicFileAttributeView.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BasicFileAttributeView.readAttributes

```java
BasicFileAttributes readAttributes() throws IOException
```

Reads the basic file attributes as a bulk operation.

 

 It is implementation specific if all file attributes are read as an
 atomic operation with respect to other file system operations.

**返回**

- the file attributes

**异常**

- **IOException** — if an I/O error occurs
