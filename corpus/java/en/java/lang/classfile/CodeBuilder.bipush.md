---
id: "java-en-function-codebuilder-bipush"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.bipush"
signature: "default CodeBuilder bipush(int b)"
title: "CodeBuilder.bipush"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.bipush

```java
default CodeBuilder bipush(int b)
```

Generates an instruction pushing an `INT int` in the range
 of `BYTE byte` (`[-128, 127]`) onto the operand
 stack.

**参数**

- **b** — the int in the range of byte

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `b` is out of range of byte

**参见**

- Opcode#BIPUSH
- #loadConstant(int)
- ConstantInstruction.IntrinsicConstantInstruction
