---
id: "java-en-function-stackframe-getmethodtype"
language: "java"
lang: "en"
category: "function"
name: "StackFrame.getMethodType"
signature: "public default MethodType getMethodType()"
title: "StackFrame.getMethodType"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StackWalker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StackFrame.getMethodType

```java
public default MethodType getMethodType()
```

Returns the `MethodType` representing the parameter types and
 the return type for the method represented by this stack frame.

 The default implementation throws `UnsupportedOperationException`.

**返回**

- the `MethodType` of the method represented by this stack frame

**异常**

- **UnsupportedOperationException** — if the `StackWalker` is configured with `DROP_METHOD_INFO DROP_METHOD_INFO` option or without `RETAIN_CLASS_REFERENCE RETAIN_CLASS_REFERENCE` option

> *Since 10*
