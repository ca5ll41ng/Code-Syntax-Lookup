---
id: "java-en-function-codebuilder-lshr"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.lshr"
signature: "default CodeBuilder lshr()"
title: "CodeBuilder.lshr"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.lshr

```java
default CodeBuilder lshr()
```

Generates an instruction to shift a `LONG long` right.
 This carries the sign bit to the vacated most significant bits, as
 opposed to `lushr` that fills vacated most significant bits with
 `0`.

**返回**

- this builder

**参见**

- Opcode#LSHR
- OperatorInstruction
