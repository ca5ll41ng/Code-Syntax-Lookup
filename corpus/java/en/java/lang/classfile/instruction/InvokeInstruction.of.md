---
id: "java-en-function-invokeinstruction-of"
language: "java"
lang: "en"
category: "function"
name: "InvokeInstruction.of"
signature: "static InvokeInstruction of(Opcode op, MemberRefEntry method)"
title: "InvokeInstruction.of"
directive: "method"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/InvokeInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InvokeInstruction.of

```java
static InvokeInstruction of(Opcode op, MemberRefEntry method)
```

{@return an invocation instruction}

**参数**

- **op** — the opcode for the specific type of invocation instruction, which must be of kind `INVOKE`
- **method** — a constant pool entry describing the method

**异常**

- **IllegalArgumentException** — if the opcode kind is not `INVOKE`
