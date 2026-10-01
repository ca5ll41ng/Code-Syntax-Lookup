---
id: "java-en-function-codebuilder-iconst_0"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.iconst_0"
signature: "default CodeBuilder iconst_0()"
title: "CodeBuilder.iconst_0"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.iconst_0

```java
default CodeBuilder iconst_0()
```

Generates an instruction pushing `INT int` constant 0 onto
 the operand stack.

**返回**

- this builder

**参见**

- Opcode#ICONST_0
- #loadConstant(int)
- ConstantInstruction.IntrinsicConstantInstruction
