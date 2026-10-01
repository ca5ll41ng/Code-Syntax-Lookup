---
id: "java-en-function-exceptioncatch-of"
language: "java"
lang: "en"
category: "function"
name: "ExceptionCatch.of"
signature: "static ExceptionCatch of(Label handler, Label tryStart, Label tryEnd, Optional<ClassEntry> catchTypeEntry)"
title: "ExceptionCatch.of"
directive: "method"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/ExceptionCatch.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ExceptionCatch.of

```java
static ExceptionCatch of(Label handler, Label tryStart, Label tryEnd, Optional<ClassEntry> catchTypeEntry)
```

{@return an exception table pseudo-instruction}

**参数**

- **handler** — the handler for the exception
- **tryStart** — the beginning of the instruction range for the guarded instructions
- **tryEnd** — the end of the instruction range for the guarded instructions
- **catchTypeEntry** — the type of exception to catch, or empty if this handler is unconditional
