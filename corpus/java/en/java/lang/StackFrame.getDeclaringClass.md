---
id: "java-en-function-stackframe-getdeclaringclass"
language: "java"
lang: "en"
category: "function"
name: "StackFrame.getDeclaringClass"
signature: "public Class<?> getDeclaringClass()"
title: "StackFrame.getDeclaringClass"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StackWalker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StackFrame.getDeclaringClass

```java
public Class<?> getDeclaringClass()
```

{@return the declaring `Class` for the method represented by
 this stack frame}

**异常**

- **UnsupportedOperationException** — if the `StackWalker` is configured without `RETAIN_CLASS_REFERENCE RETAIN_CLASS_REFERENCE` option
