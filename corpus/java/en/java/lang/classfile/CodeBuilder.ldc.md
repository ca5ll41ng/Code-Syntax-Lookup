---
id: "java-en-function-codebuilder-ldc"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.ldc"
signature: "default CodeBuilder ldc(ConstantDesc value)"
title: "CodeBuilder.ldc"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.ldc

```java
default CodeBuilder ldc(ConstantDesc value)
```

Generates an instruction pushing an item from the run-time constant pool
 onto the operand stack.
 

 This may also generate `LDC_W ldc_w` and `LDC2_W
 ldc2_w` instructions.

 `loadConstant(ConstantDesc) loadConstant` generates more optimal
 instructions and should be used for general constants if an `ldc`
 instruction is not strictly required.

**参数**

- **value** — the constant value

**返回**

- this builder

**参见**

- Opcode#LDC
- #loadConstant(ConstantDesc)
- ConstantInstruction.LoadConstantInstruction
