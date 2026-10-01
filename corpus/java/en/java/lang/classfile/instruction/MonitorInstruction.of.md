---
id: "java-en-function-monitorinstruction-of"
language: "java"
lang: "en"
category: "function"
name: "MonitorInstruction.of"
signature: "static MonitorInstruction of(Opcode op)"
title: "MonitorInstruction.of"
directive: "method"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/MonitorInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MonitorInstruction.of

```java
static MonitorInstruction of(Opcode op)
```

{@return a monitor instruction}

**参数**

- **op** — the opcode for the specific type of monitor instruction, which must be of kind `MONITOR`

**异常**

- **IllegalArgumentException** — if the opcode kind is not `MONITOR`.
