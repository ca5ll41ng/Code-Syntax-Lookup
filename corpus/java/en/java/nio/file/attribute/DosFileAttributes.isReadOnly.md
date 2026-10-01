---
id: "java-en-function-dosfileattributes-isreadonly"
language: "java"
lang: "en"
category: "function"
name: "DosFileAttributes.isReadOnly"
signature: "boolean isReadOnly()"
title: "DosFileAttributes.isReadOnly"
directive: "method"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/DosFileAttributes.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DosFileAttributes.isReadOnly

```java
boolean isReadOnly()
```

Returns the value of the read-only attribute.

 

 This attribute is often used as a simple access control mechanism
 to prevent files from being deleted or updated. Whether the file system
 or platform does any enforcement to prevent read-only files
 from being updated is implementation specific.

**返回**

- the value of the read-only attribute
