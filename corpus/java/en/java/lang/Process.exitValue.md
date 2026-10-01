---
id: "java-en-function-process-exitvalue"
language: "java"
lang: "en"
category: "function"
name: "Process.exitValue"
signature: "public abstract int exitValue()"
title: "Process.exitValue"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Process.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Process.exitValue

```java
public abstract int exitValue()
```

Returns the exit value for the process.

**返回**

- the exit value of the process represented by this `Process` object.  By convention, the value `0` indicates normal termination.

**异常**

- **IllegalThreadStateException** — if the process represented by this `Process` object has not yet terminated
