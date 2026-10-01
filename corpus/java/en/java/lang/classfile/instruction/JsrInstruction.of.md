---
id: "java-en-function-jsrinstruction-of"
language: "java"
lang: "en"
category: "function"
name: "JsrInstruction.of"
signature: "static JsrInstruction of(Opcode op, Label target)"
title: "JsrInstruction.of"
directive: "method"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/DiscontinuedInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JsrInstruction.of

```java
static JsrInstruction of(Opcode op, Label target)
```

{@return a jump subroutine instruction}

 The explicit `op` argument allows creating `JSR_W
 jsr_w` instructions to avoid short jumps.

**参数**

- **op** — the opcode for the specific type of jump subroutine instruction, which must be of kind `DISCONTINUED_JSR`
- **target** — target label of the subroutine

**异常**

- **IllegalArgumentException** — if the opcode kind is not `DISCONTINUED_JSR`.
