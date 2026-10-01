---
id: "java-en-function-constantinstruction-ofintrinsic"
language: "java"
lang: "en"
category: "function"
name: "ConstantInstruction.ofIntrinsic"
signature: "static IntrinsicConstantInstruction ofIntrinsic(Opcode op)"
title: "ConstantInstruction.ofIntrinsic"
directive: "method"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/ConstantInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantInstruction.ofIntrinsic

```java
static IntrinsicConstantInstruction ofIntrinsic(Opcode op)
```

{@return an intrinsic constant instruction}

**参数**

- **op** — the opcode for the specific type of intrinsic constant instruction, which must be of kind `CONSTANT`

**异常**

- **IllegalArgumentException** — if the opcode does not represent a constant with implicit value
