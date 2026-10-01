---
id: "java-en-function-pathstatus-canread"
language: "java"
lang: "en"
category: "function"
name: "PathStatus.canRead"
signature: "public boolean canRead()"
title: "PathStatus.canRead"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathStatus.canRead

```java
public boolean canRead()
```

Tests whether the application can read the file located by this
 abstract pathname. On some platforms it may be possible to start the
 Java virtual machine with special privileges that allow it to read
 files that are marked as unreadable. Consequently, this method may return
 `true` even though the file does not have read permissions.

**返回**

- `true` if and only if the file located by this abstract pathname exists and can be read by the application; `false` otherwise
