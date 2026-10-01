---
id: "java-en-function-stackframe-getbytecodeindex"
language: "java"
lang: "en"
category: "function"
name: "StackFrame.getByteCodeIndex"
signature: "public int getByteCodeIndex()"
title: "StackFrame.getByteCodeIndex"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StackWalker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StackFrame.getByteCodeIndex

```java
public int getByteCodeIndex()
```

Returns the index to the code array of the `Code` attribute
 containing the execution point represented by this stack frame.
 The code array gives the actual bytes of Java Virtual Machine code
 that implement the method.

**返回**

- the index to the code array of the `Code` attribute containing the execution point represented by this stack frame, or a negative number if the method is native.

**异常**

- **UnsupportedOperationException** — if the `StackWalker` is configured with `DROP_METHOD_INFO DROP_METHOD_INFO` option
