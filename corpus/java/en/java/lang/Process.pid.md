---
id: "java-en-function-process-pid"
language: "java"
lang: "en"
category: "function"
name: "Process.pid"
signature: "public long pid()"
title: "Process.pid"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Process.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Process.pid

```java
public long pid()
```

Returns the native process ID of the process.
 The native process ID is an identification number that the operating
 system assigns to the process.

 The implementation of this method returns the process id as:
 `toHandle toHandle`.

**返回**

- the native process id of the process

**异常**

- **UnsupportedOperationException** — if the Process implementation does not support this operation

> *Since 9*
