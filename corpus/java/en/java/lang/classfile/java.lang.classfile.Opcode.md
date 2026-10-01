---
id: "java-en-function-java-lang-classfile-opcode"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.Opcode"
title: "Opcode"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/Opcode.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Opcode

Describes the opcodes of the JVM instruction set, as described in JVMS {@jvms 6.5}.
 This includes a few pseudo-opcodes modified by `isWide() wide`.
 

 An opcode describes the operation of an instruction.

 The enum constants are named after the opcodes' mnemonics in uppercase.
 Wide pseudo-opcodes are named with the original opcodes' mnemonic plus
 a `_W` suffix. However, `LDC_W ldc_w`, `LDC2_W ldc2_w`,
 `GOTO_W goto_w`, and `JSR_W jsr_w` are legitimate opcodes
 instead of wide pseudo-opcodes.

**参见**

- Instruction

> *Since 24*
