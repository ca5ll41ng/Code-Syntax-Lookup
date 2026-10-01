---
id: "java-en-function-opcode-bytecode"
language: "java"
lang: "en"
category: "function"
name: "Opcode.bytecode"
signature: "public int bytecode()"
title: "Opcode.bytecode"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/Opcode.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Opcode.bytecode

```java
public int bytecode()
```

{@return the opcode value} For `isWide() wide` pseudo-opcodes, returns the
 first 2 bytes of the instruction, which are the wide opcode `196` (`0xC4`)
 and the functional opcode, as a U2 value.
