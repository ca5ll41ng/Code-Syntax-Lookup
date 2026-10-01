---
id: "java-en-function-pathstatus-mkdirs"
language: "java"
lang: "en"
category: "function"
name: "PathStatus.mkdirs"
signature: "public boolean mkdirs()"
title: "PathStatus.mkdirs"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathStatus.mkdirs

```java
public boolean mkdirs()
```

Creates the directory named by this abstract pathname, including any
 necessary but nonexistent parent directories.  Note that if this
 operation fails it may have succeeded in creating some of the necessary
 parent directories.

**返回**

- `true` if and only if the directory was created, along with all necessary parent directories; `false` otherwise
