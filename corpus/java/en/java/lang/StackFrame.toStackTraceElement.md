---
id: "java-en-function-stackframe-tostacktraceelement"
language: "java"
lang: "en"
category: "function"
name: "StackFrame.toStackTraceElement"
signature: "public StackTraceElement toStackTraceElement()"
title: "StackFrame.toStackTraceElement"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StackWalker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StackFrame.toStackTraceElement

```java
public StackTraceElement toStackTraceElement()
```

{@return `StackTraceElement` for this stack frame}

**异常**

- **UnsupportedOperationException** — if the `StackWalker` is configured with `DROP_METHOD_INFO DROP_METHOD_INFO` option
