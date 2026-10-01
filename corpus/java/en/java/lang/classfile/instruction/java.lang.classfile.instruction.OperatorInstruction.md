---
id: "java-en-function-java-lang-classfile-instruction-operatorinstruction"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.instruction.OperatorInstruction"
title: "OperatorInstruction"
directive: "type"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/OperatorInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OperatorInstruction

Models an arithmetic operator instruction in the `code` array of a
 `Code` attribute.  Corresponding opcodes have a `kind() kind` of
 `OPERATOR`.  Delivered as a `CodeElement` when
 traversing the elements of a `CodeModel`.
 

 An operator instruction is composite:
 {@snippet lang=text :
 // @link substring="OperatorInstruction" target="#of" :
 OperatorInstruction(Opcode opcode) // @link substring="opcode" target="#opcode()"
 }

**参见**

- Opcode.Kind#OPERATOR

> *Since 24*
