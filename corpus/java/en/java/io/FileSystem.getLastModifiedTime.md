---
id: "java-en-function-filesystem-getlastmodifiedtime"
language: "java"
lang: "en"
category: "function"
name: "FileSystem.getLastModifiedTime"
signature: "public abstract long getLastModifiedTime(File f)"
title: "FileSystem.getLastModifiedTime"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FileSystem.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystem.getLastModifiedTime

```java
public abstract long getLastModifiedTime(File f)
```

Return the time at which the file or directory denoted by the given
 abstract pathname was last modified, or zero if it does not exist or
 some other I/O error occurs.
