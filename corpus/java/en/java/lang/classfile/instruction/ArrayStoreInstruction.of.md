---
id: "java-en-function-arraystoreinstruction-of"
language: "java"
lang: "en"
category: "function"
name: "ArrayStoreInstruction.of"
signature: "static ArrayStoreInstruction of(Opcode op)"
title: "ArrayStoreInstruction.of"
directive: "method"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/ArrayStoreInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArrayStoreInstruction.of

```java
static ArrayStoreInstruction of(Opcode op)
```

{@return an array store instruction}

**参数**

- **op** — the opcode for the specific type of array store instruction, which must be of kind `ARRAY_STORE`

**异常**

- **IllegalArgumentException** — if the opcode kind is not `ARRAY_STORE`
