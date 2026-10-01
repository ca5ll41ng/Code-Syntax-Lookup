---
id: "java-en-function-codebuilder-ishr"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.ishr"
signature: "default CodeBuilder ishr()"
title: "CodeBuilder.ishr"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.ishr

```java
default CodeBuilder ishr()
```

Generates an instruction to shift an `INT int` right.
 This carries the sign bit to the vacated most significant bits, as
 opposed to `iushr` that fills vacated most significant bits with
 `0`.

**返回**

- this builder

**参见**

- Opcode#ISHR
- OperatorInstruction
