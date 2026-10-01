---
id: "java-en-function-codebuilder-dconst_0"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.dconst_0"
signature: "default CodeBuilder dconst_0()"
title: "CodeBuilder.dconst_0"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.dconst_0

```java
default CodeBuilder dconst_0()
```

Generates an instruction pushing `DOUBLE double` constant
 0 onto the operand stack.

**返回**

- this builder

**参见**

- Opcode#DCONST_0
- #loadConstant(double)
- ConstantInstruction.IntrinsicConstantInstruction
