---
id: "java-en-function-stacktraceelement-stacktraceelement"
language: "java"
lang: "en"
category: "function"
name: "StackTraceElement.StackTraceElement"
signature: "public StackTraceElement(String declaringClass, String methodName, String fileName, int lineNumber)"
title: "StackTraceElement.StackTraceElement"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StackTraceElement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StackTraceElement.StackTraceElement

```java
public StackTraceElement(String declaringClass, String methodName, String fileName, int lineNumber)
```

Creates a stack trace element representing the specified execution
 point. The `getModuleName module name` and `getModuleVersion module version` of the stack trace element will
 be `null`.

**参数**

- **declaringClass** — the `#binary-name binary name` of the class containing the execution point represented by the stack trace element
- **methodName** — the name of the method containing the execution point represented by the stack trace element
- **fileName** — the name of the file containing the execution point represented by the stack trace element, or `null` if this information is unavailable
- **lineNumber** — the line number of the source line containing the execution point represented by this stack trace element, or a negative number if this information is unavailable. A value of -2 indicates that the method containing the execution point is a native method

**异常**

- **NullPointerException** — if `declaringClass` or `methodName` is null

> *Since 1.5*
