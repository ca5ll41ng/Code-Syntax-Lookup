---
id: "java-en-function-arrayloadinstruction-of"
language: "java"
lang: "en"
category: "function"
name: "ArrayLoadInstruction.of"
signature: "static ArrayLoadInstruction of(Opcode op)"
title: "ArrayLoadInstruction.of"
directive: "method"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/ArrayLoadInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArrayLoadInstruction.of

```java
static ArrayLoadInstruction of(Opcode op)
```

{@return an array load instruction}

**参数**

- **op** — the opcode for the specific type of array load instruction, which must be of kind `ARRAY_LOAD`

**异常**

- **IllegalArgumentException** — if the opcode kind is not `ARRAY_LOAD`
