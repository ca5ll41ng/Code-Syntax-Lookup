---
id: "java-en-function-logrecord-test"
language: "java"
lang: "en"
category: "function"
name: "LogRecord.test"
signature: "public boolean test(StackWalker.StackFrame t)"
title: "LogRecord.test"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/LogRecord.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LogRecord.test

```java
public boolean test(StackWalker.StackFrame t)
```

Returns true if we have found the caller's frame, false if the frame
 must be skipped.

**参数**

- **t** — The frame info.

**返回**

- true if we have found the caller's frame, false if the frame must be skipped.
