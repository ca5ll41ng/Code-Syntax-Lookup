---
id: "java-en-function-process-info"
language: "java"
lang: "en"
category: "function"
name: "Process.info"
signature: "public ProcessHandle.Info info()"
title: "Process.info"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Process.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Process.info

```java
public ProcessHandle.Info info()
```

Returns a snapshot of information about the process.

 

 A `ProcessHandle.Info` instance has accessor methods
 that return information about the process if it is available.

 This implementation returns information about the process as:
 `toHandle toHandle`.

**返回**

- a snapshot of information about the process, always non-null

**异常**

- **UnsupportedOperationException** — if the Process implementation does not support this operation

> *Since 9*
