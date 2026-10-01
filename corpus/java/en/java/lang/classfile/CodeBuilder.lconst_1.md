---
id: "java-en-function-codebuilder-lconst_1"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.lconst_1"
signature: "default CodeBuilder lconst_1()"
title: "CodeBuilder.lconst_1"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.lconst_1

```java
default CodeBuilder lconst_1()
```

Generates an instruction pushing `LONG long` constant 1
 onto the operand stack.

**返回**

- this builder

**参见**

- Opcode#LCONST_1
- #loadConstant(long)
- ConstantInstruction.IntrinsicConstantInstruction
