---
id: "java-en-function-fieldinstruction-of"
language: "java"
lang: "en"
category: "function"
name: "FieldInstruction.of"
signature: "static FieldInstruction of(Opcode op, FieldRefEntry field)"
title: "FieldInstruction.of"
directive: "method"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/FieldInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FieldInstruction.of

```java
static FieldInstruction of(Opcode op, FieldRefEntry field)
```

{@return a field access instruction}

**参数**

- **op** — the opcode for the specific type of field access instruction, which must be of kind `FIELD_ACCESS`
- **field** — a constant pool entry describing the field

**异常**

- **IllegalArgumentException** — if the opcode kind is not `FIELD_ACCESS`.
