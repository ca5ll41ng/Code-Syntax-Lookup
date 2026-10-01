---
id: "java-en-function-dosfileattributeview-setarchive"
language: "java"
lang: "en"
category: "function"
name: "DosFileAttributeView.setArchive"
signature: "void setArchive(boolean value) throws IOException"
title: "DosFileAttributeView.setArchive"
directive: "method"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/DosFileAttributeView.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DosFileAttributeView.setArchive

```java
void setArchive(boolean value) throws IOException
```

Updates the value of the archive attribute.

 

 It is implementation specific if the attribute can be updated as an
 atomic operation with respect to other file system operations. An
 implementation may, for example, require to read the existing value of
 the DOS attribute in order to update this attribute.

**参数**

- **value** — the new value of the attribute

**异常**

- **IOException** — if an I/O error occurs
