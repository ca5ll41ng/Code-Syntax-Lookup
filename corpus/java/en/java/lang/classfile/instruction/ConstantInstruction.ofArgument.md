---
id: "java-en-function-constantinstruction-ofargument"
language: "java"
lang: "en"
category: "function"
name: "ConstantInstruction.ofArgument"
signature: "static ArgumentConstantInstruction ofArgument(Opcode op, int value)"
title: "ConstantInstruction.ofArgument"
directive: "method"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/ConstantInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantInstruction.ofArgument

```java
static ArgumentConstantInstruction ofArgument(Opcode op, int value)
```

{@return an argument constant instruction}
 

 `value` must be in the range of `byte`, `[-128, 127]`,
 for `BIPUSH`, and in the range of `short`, `[-32768, 32767]`, for `SIPUSH`.

**参数**

- **op** — the opcode for the specific type of argument constant instruction, which must be `BIPUSH` or `SIPUSH`
- **value** — the constant value

**异常**

- **IllegalArgumentException** — if the opcode is not `BIPUSH` or `SIPUSH`, or if the constant value is out of range for the opcode
