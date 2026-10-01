---
id: "java-en-function-processhandle-current"
language: "java"
lang: "en"
category: "function"
name: "ProcessHandle.current"
signature: "static ProcessHandle current()"
title: "ProcessHandle.current"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ProcessHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProcessHandle.current

```java
static ProcessHandle current()
```

Returns a ProcessHandle for the current process. The ProcessHandle cannot be
 used to destroy the current process, use `exit System.exit` instead.

**返回**

- a ProcessHandle for the current process

**异常**

- **UnsupportedOperationException** — if the implementation does not support this operation
