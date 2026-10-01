---
id: "java-en-function-java-lang-classfile-instruction-loadinstruction"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.instruction.LoadInstruction"
title: "LoadInstruction"
directive: "type"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/LoadInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LoadInstruction

Models a local variable load instruction in the `code` array of a
 `Code` attribute.  Corresponding opcodes have a `kind() kind` of `LOAD`.  Delivered as a `CodeElement` when traversing the elements of a `CodeModel`.
 

 A local variable load instruction is composite:
 {@snippet lang=text :
 // @link substring="LoadInstruction" target="#of(TypeKind, int)" :
 LoadInstruction(
     TypeKind typeKind, // @link substring="typeKind" target="#typeKind"
     int slot // @link substring="slot" target="#slot"
 )
 }
 where `TypeKind` is `#computational-type
 computational`, and `slot` is `#u2 u2`.

**参见**

- Opcode.Kind#LOAD
- CodeBuilder#loadLocal CodeBuilder::loadLocal

> *Since 24*
