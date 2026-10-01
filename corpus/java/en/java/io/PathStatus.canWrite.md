---
id: "java-en-function-pathstatus-canwrite"
language: "java"
lang: "en"
category: "function"
name: "PathStatus.canWrite"
signature: "public boolean canWrite()"
title: "PathStatus.canWrite"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathStatus.canWrite

```java
public boolean canWrite()
```

Tests whether the application can modify the file located by this
 abstract pathname. On some platforms it may be possible to start the
 Java virtual machine with special privileges that allow it to modify
 files that are marked read-only. Consequently, this method may return
 `true` even though the file is marked read-only.

**返回**

- `true` if and only if the file system actually contains a file located by this abstract pathname and the application is allowed to write to the file; `false` otherwise.
