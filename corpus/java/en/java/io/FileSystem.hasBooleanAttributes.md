---
id: "java-en-function-filesystem-hasbooleanattributes"
language: "java"
lang: "en"
category: "function"
name: "FileSystem.hasBooleanAttributes"
signature: "public boolean hasBooleanAttributes(File f, int attributes)"
title: "FileSystem.hasBooleanAttributes"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FileSystem.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystem.hasBooleanAttributes

```java
public boolean hasBooleanAttributes(File f, int attributes)
```

Checks if all the given boolean attributes are true for the file or
 directory denoted by the given abstract pathname. False if it does not
 exist or some other I/O error occurs.
