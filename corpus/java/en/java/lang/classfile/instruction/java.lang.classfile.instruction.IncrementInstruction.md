---
id: "java-en-function-java-lang-classfile-instruction-incrementinstruction"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.instruction.IncrementInstruction"
title: "IncrementInstruction"
directive: "type"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/IncrementInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IncrementInstruction

Models a local variable increment instruction in the `code` array of a
 `Code` attribute.  Corresponding opcodes have a `kind()
 kind` of `INCREMENT`.  Delivered as a `CodeElement` when
 traversing the elements of a `CodeModel`.
 

 A local variable increment instruction is composite:
 {@snippet lang=text :
 // @link substring="IncrementInstruction" target="#of" :
 IncrementInstruction(
     int slot, // @link substring="slot" target="#slot()"
     int constant // @link substring="constant" target="#constant()"
 )
 }
 where
 
 
- `slot` must be `#u2 u2`.
 
- `constant` must be within `[-32768, 32767]`.

**参见**

- Opcode.Kind#INCREMENT
- CodeBuilder#iinc CodeBuilder::iinc

> *Since 24*
