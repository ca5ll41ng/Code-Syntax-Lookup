---
id: "java-en-function-retinstruction-of"
language: "java"
lang: "en"
category: "function"
name: "RetInstruction.of"
signature: "static RetInstruction of(Opcode op, int slot)"
title: "RetInstruction.of"
directive: "method"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/DiscontinuedInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RetInstruction.of

```java
static RetInstruction of(Opcode op, int slot)
```

{@return a return from subroutine instruction}
 

 `slot` must be `#u1 u1` for
 `RET ret`, or `#u2 u2` for
 `RET_W wide ret`.

 The explicit `op` argument allows creating `wide ret`
 instructions with `slot` in the range of regular `ret`
 instructions.

**参数**

- **op** — the opcode for the specific type of return from subroutine instruction, which must be of kind `DISCONTINUED_RET`
- **slot** — the local variable slot to load return address from

**异常**

- **IllegalArgumentException** — if the opcode kind is not `DISCONTINUED_RET` or if `slot` is out of range
