---
id: "java-en-function-incrementinstruction-of"
language: "java"
lang: "en"
category: "function"
name: "IncrementInstruction.of"
signature: "static IncrementInstruction of(int slot, int constant)"
title: "IncrementInstruction.of"
directive: "method"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/IncrementInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IncrementInstruction.of

```java
static IncrementInstruction of(int slot, int constant)
```

{@return an increment instruction}
 
 
- `slot` must be `#u2 u2`.
 
- `constant` must be within `[-32768, 32767]`.

**参数**

- **slot** — the local variable slot to increment
- **constant** — the value to increment by

**异常**

- **IllegalArgumentException** — if `slot` or `constant` is out of range
