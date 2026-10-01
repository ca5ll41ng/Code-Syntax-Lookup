---
id: "java-en-function-stackframe-isnativemethod"
language: "java"
lang: "en"
category: "function"
name: "StackFrame.isNativeMethod"
signature: "public boolean isNativeMethod()"
title: "StackFrame.isNativeMethod"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StackWalker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StackFrame.isNativeMethod

```java
public boolean isNativeMethod()
```

{@return `true` if the method containing the execution point
 represented by this stack frame is a native method}

**异常**

- **UnsupportedOperationException** — if the `StackWalker` is configured with `DROP_METHOD_INFO DROP_METHOD_INFO` option
