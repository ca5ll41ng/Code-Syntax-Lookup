---
id: "java-en-function-java-lang-classfile-instruction-storeinstruction"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.instruction.StoreInstruction"
title: "StoreInstruction"
directive: "type"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/StoreInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StoreInstruction

Models a local variable store instruction in the `code` array of a
 `Code` attribute.  Corresponding opcodes have a `kind() kind` of
 `STORE`.  Delivered as a `CodeElement` when
 traversing the elements of a `CodeModel`.
 

 A local variable store instruction is composite:
 {@snippet lang=text :
 // @link substring="StoreInstruction" target="#of(TypeKind, int)" :
 StoreInstruction(
     TypeKind typeKind, // @link substring="typeKind" target="#typeKind"
     int slot // @link substring="slot" target="#slot"
 )
 }
 where `TypeKind` is `#computational-type
 computational`, and `slot` is `#u2 u2`.
 

 `astore` series of instructions, or `reference` type store
 instructions, can also operate on the `#returnAddress
 returnAddress` type from discontinued `DiscontinuedInstruction.JsrInstruction jump subroutine instructions`.

**参见**

- Opcode.Kind#STORE
- CodeBuilder#storeLocal CodeBuilder::storeLocal

> *Since 24*
