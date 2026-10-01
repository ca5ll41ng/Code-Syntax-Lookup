---
id: "java-en-function-codemodel-exceptionhandlers"
language: "java"
lang: "en"
category: "function"
name: "CodeModel.exceptionHandlers"
signature: "List<ExceptionCatch> exceptionHandlers()"
title: "CodeModel.exceptionHandlers"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeModel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeModel.exceptionHandlers

```java
List<ExceptionCatch> exceptionHandlers()
```

{@return the exception table of the method}  The exception table is also
 modeled by `ExceptionCatch` elements in the streaming view.
