---
id: "java-en-function-processhandle-of"
language: "java"
lang: "en"
category: "function"
name: "ProcessHandle.of"
signature: "static Optional<ProcessHandle> of(long pid)"
title: "ProcessHandle.of"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ProcessHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProcessHandle.of

```java
static Optional<ProcessHandle> of(long pid)
```

Returns an `Optional` for an existing native process.

**参数**

- **pid** — a native process ID

**返回**

- an `Optional` of the PID for the process; the `Optional` is empty if the process does not exist

**异常**

- **UnsupportedOperationException** — if the implementation does not support this operation
