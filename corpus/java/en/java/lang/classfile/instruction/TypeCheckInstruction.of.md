---
id: "java-en-function-typecheckinstruction-of"
language: "java"
lang: "en"
category: "function"
name: "TypeCheckInstruction.of"
signature: "static TypeCheckInstruction of(Opcode op, ClassEntry type)"
title: "TypeCheckInstruction.of"
directive: "method"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/TypeCheckInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TypeCheckInstruction.of

```java
static TypeCheckInstruction of(Opcode op, ClassEntry type)
```

{@return a type check instruction}

**参数**

- **op** — the opcode for the specific type of type check instruction, which must be of kind `TYPE_CHECK`
- **type** — the type against which to check or cast

**异常**

- **IllegalArgumentException** — if the opcode kind is not `TYPE_CHECK`
