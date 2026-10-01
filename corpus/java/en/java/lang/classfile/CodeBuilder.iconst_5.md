---
id: "java-en-function-codebuilder-iconst_5"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.iconst_5"
signature: "default CodeBuilder iconst_5()"
title: "CodeBuilder.iconst_5"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.iconst_5

```java
default CodeBuilder iconst_5()
```

Generates an instruction pushing `INT int` constant 5 onto
 the operand stack.

**返回**

- this builder

**参见**

- Opcode#ICONST_5
- #loadConstant(int)
- ConstantInstruction.IntrinsicConstantInstruction
