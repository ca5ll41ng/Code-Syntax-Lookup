---
id: "java-en-function-java-lang-classfile-instruction-monitorinstruction"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.instruction.MonitorInstruction"
title: "MonitorInstruction"
directive: "type"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/MonitorInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MonitorInstruction

Models a `MONITORENTER monitorenter` or `MONITOREXIT
 monitorexit` instruction in the `code` array of a `Code` attribute.
 Corresponding opcodes have a `kind() kind` of `MONITOR`.  Delivered as a `CodeElement` when traversing the
 elements of a `CodeModel`.
 

 A monitor instruction is composite:
 {@snippet lang=text :
 // @link substring="MonitorInstruction" target="#of(Opcode)" :
 MonitorInstruction(Opcode opcode) // @link substring="opcode" target="#opcode"
 }

> *Since 24*
