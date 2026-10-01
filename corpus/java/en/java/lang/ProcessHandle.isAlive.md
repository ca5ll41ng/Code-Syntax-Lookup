---
id: "java-en-function-processhandle-isalive"
language: "java"
lang: "en"
category: "function"
name: "ProcessHandle.isAlive"
signature: "boolean isAlive()"
title: "ProcessHandle.isAlive"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ProcessHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProcessHandle.isAlive

```java
boolean isAlive()
```

Tests whether the process represented by this `ProcessHandle` is alive.
 Process termination is implementation and operating system specific.
 The process is considered alive as long as the PID is valid.

**返回**

- `true` if the process represented by this `ProcessHandle` object has not yet terminated
