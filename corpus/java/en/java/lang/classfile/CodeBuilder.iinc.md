---
id: "java-en-function-codebuilder-iinc"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.iinc"
signature: "default CodeBuilder iinc(int slot, int val)"
title: "CodeBuilder.iinc"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.iinc

```java
default CodeBuilder iinc(int slot, int val)
```

Generates an instruction to increment an `INT int` local
 variable by a constant.
 

 This may also generate `IINC_W wide iinc` instructions if
 `slot` exceeds the limit of `#u1 u1` or
 `val` exceeds the range of `BYTE byte`.

**参数**

- **slot** — the local variable slot
- **val** — the increment value

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `slot` is not `#u2 u2` or `val` is out of range of `SHORT short`

**参见**

- Opcode#IINC
- IncrementInstruction
