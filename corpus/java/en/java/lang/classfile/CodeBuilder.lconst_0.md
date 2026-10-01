---
id: "java-en-function-codebuilder-lconst_0"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.lconst_0"
signature: "default CodeBuilder lconst_0()"
title: "CodeBuilder.lconst_0"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.lconst_0

```java
default CodeBuilder lconst_0()
```

Generates an instruction pushing `LONG long` constant 0
 onto the operand stack.

**返回**

- this builder

**参见**

- Opcode#LCONST_0
- #loadConstant(long)
- ConstantInstruction.IntrinsicConstantInstruction
