---
id: "java-en-function-codebuilder-aconst_null"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.aconst_null"
signature: "default CodeBuilder aconst_null()"
title: "CodeBuilder.aconst_null"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.aconst_null

```java
default CodeBuilder aconst_null()
```

Generates an instruction pushing the null object `REFERENCE
 reference` onto the operand stack.

**返回**

- this builder

**参见**

- Opcode#ACONST_NULL
- ConstantInstruction.IntrinsicConstantInstruction
