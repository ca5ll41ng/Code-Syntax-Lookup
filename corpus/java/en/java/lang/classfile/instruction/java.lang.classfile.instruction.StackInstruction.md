---
id: "java-en-function-java-lang-classfile-instruction-stackinstruction"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.instruction.StackInstruction"
title: "StackInstruction"
directive: "type"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/StackInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StackInstruction

Models a stack manipulation instruction in the `code` array of a
 `Code` attribute.  Corresponding opcodes have a `kind() kind` of
 `STACK`.  Delivered as a `CodeElement` when
 traversing the elements of a `CodeModel`.
 

 A stack manipulation instruction is composite:
 {@snippet lang=text :
 // @link substring="StackInstruction" target="#of" :
 StackInstruction(Opcode opcode) // @link substring="opcode" target="#opcode()"
 }

**参见**

- Opcode.Kind#STACK

> *Since 24*
