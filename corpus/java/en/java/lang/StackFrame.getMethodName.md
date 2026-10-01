---
id: "java-en-function-stackframe-getmethodname"
language: "java"
lang: "en"
category: "function"
name: "StackFrame.getMethodName"
signature: "public String getMethodName()"
title: "StackFrame.getMethodName"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StackWalker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StackFrame.getMethodName

```java
public String getMethodName()
```

{@return the name of the method represented by this stack frame}

**异常**

- **UnsupportedOperationException** — if the `StackWalker` is configured with `DROP_METHOD_INFO DROP_METHOD_INFO` option
