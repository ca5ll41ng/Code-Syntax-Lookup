---
id: "java-en-function-codebuilder-fconst_1"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.fconst_1"
signature: "default CodeBuilder fconst_1()"
title: "CodeBuilder.fconst_1"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.fconst_1

```java
default CodeBuilder fconst_1()
```

Generates an instruction pushing `FLOAT float` constant 1
 onto the operand stack.

**返回**

- this builder

**参见**

- Opcode#FCONST_1
- #loadConstant(float)
- ConstantInstruction.IntrinsicConstantInstruction
