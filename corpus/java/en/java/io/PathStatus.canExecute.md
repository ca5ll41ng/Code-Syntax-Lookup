---
id: "java-en-function-pathstatus-canexecute"
language: "java"
lang: "en"
category: "function"
name: "PathStatus.canExecute"
signature: "public boolean canExecute()"
title: "PathStatus.canExecute"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathStatus.canExecute

```java
public boolean canExecute()
```

Tests whether the application can execute the file located by this
 abstract pathname. On some platforms it may be possible to start the
 Java virtual machine with special privileges that allow it to execute
 files that are not marked executable. Consequently, this method may return
 `true` even though the file does not have execute permissions.

**返回**

- `true` if and only if the abstract pathname exists and the application is allowed to execute the file

> *Since 1.6*
