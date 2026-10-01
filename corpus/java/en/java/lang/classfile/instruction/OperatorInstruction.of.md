---
id: "java-en-function-operatorinstruction-of"
language: "java"
lang: "en"
category: "function"
name: "OperatorInstruction.of"
signature: "static OperatorInstruction of(Opcode op)"
title: "OperatorInstruction.of"
directive: "method"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/OperatorInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OperatorInstruction.of

```java
static OperatorInstruction of(Opcode op)
```

{@return an operator instruction}

**参数**

- **op** — the opcode for the specific type of operator instruction, which must be of kind `OPERATOR`

**异常**

- **IllegalArgumentException** — if the opcode kind is not `OPERATOR`.
