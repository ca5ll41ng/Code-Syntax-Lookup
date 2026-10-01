---
id: "java-en-function-stackinstruction-of"
language: "java"
lang: "en"
category: "function"
name: "StackInstruction.of"
signature: "static StackInstruction of(Opcode op)"
title: "StackInstruction.of"
directive: "method"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/StackInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StackInstruction.of

```java
static StackInstruction of(Opcode op)
```

{@return a stack manipulation instruction}

**参数**

- **op** — the opcode for the specific type of stack instruction, which must be of kind `STACK`

**异常**

- **IllegalArgumentException** — if the opcode kind is not `STACK`.
