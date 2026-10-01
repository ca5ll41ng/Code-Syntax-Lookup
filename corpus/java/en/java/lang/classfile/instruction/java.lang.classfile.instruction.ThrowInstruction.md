---
id: "java-en-function-java-lang-classfile-instruction-throwinstruction"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.instruction.ThrowInstruction"
title: "ThrowInstruction"
directive: "type"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/ThrowInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThrowInstruction

Models an `ATHROW athrow` instruction in the `code` array of a
 `Code` attribute.  Delivered as a `CodeElement` when traversing
 the elements of a `CodeModel`.
 

 A throw instruction has no visible state.

**参见**

- Opcode.Kind#THROW_EXCEPTION
- CodeBuilder#athrow CodeBuiler::athrow

> *Since 24*
