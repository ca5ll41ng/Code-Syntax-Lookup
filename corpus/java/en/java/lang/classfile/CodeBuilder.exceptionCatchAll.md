---
id: "java-en-function-codebuilder-exceptioncatchall"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.exceptionCatchAll"
signature: "default CodeBuilder exceptionCatchAll(Label start, Label end, Label handler)"
title: "CodeBuilder.exceptionCatchAll"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.exceptionCatchAll

```java
default CodeBuilder exceptionCatchAll(Label start, Label end, Label handler)
```

Declares an exception table entry catching all exceptions and errors.
 

 This call may be ignored if any of the argument labels is not `labelBinding bound` and `DROP_DEAD_LABELS`
 is set.

**参数**

- **start** — the try block start
- **end** — the try block end
- **handler** — the exception handler start

**返回**

- this builder

**参见**

- ExceptionCatch
- CodeBuilder#trying
