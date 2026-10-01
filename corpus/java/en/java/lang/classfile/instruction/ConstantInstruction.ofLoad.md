---
id: "java-en-function-constantinstruction-ofload"
language: "java"
lang: "en"
category: "function"
name: "ConstantInstruction.ofLoad"
signature: "static LoadConstantInstruction ofLoad(Opcode op, LoadableConstantEntry constant)"
title: "ConstantInstruction.ofLoad"
directive: "method"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/ConstantInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantInstruction.ofLoad

```java
static LoadConstantInstruction ofLoad(Opcode op, LoadableConstantEntry constant)
```

{@return a load constant instruction}

**参数**

- **op** — the opcode for the specific type of load constant instruction, which must be of kind `CONSTANT`
- **constant** — the constant value

**异常**

- **IllegalArgumentException** — if the opcode is not `LDC`, `LDC_W`, or `LDC2_W`
