---
id: "java-en-function-stackframe-getlinenumber"
language: "java"
lang: "en"
category: "function"
name: "StackFrame.getLineNumber"
signature: "public int getLineNumber()"
title: "StackFrame.getLineNumber"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StackWalker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StackFrame.getLineNumber

```java
public int getLineNumber()
```

Returns the line number of the source line containing the execution
 point represented by this stack frame.  Generally, this is
 derived from the `LineNumberTable` attribute of the relevant
 `class` file as defined by The Java Virtual Machine
 Specification.

**返回**

- the line number of the source line containing the execution point represented by this stack frame, or a negative number if this information is unavailable.

**异常**

- **UnsupportedOperationException** — if the `StackWalker` is configured with `DROP_METHOD_INFO DROP_METHOD_INFO` option
