---
id: "java-en-function-java-lang-classfile-instruction-arrayloadinstruction"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.instruction.ArrayLoadInstruction"
title: "ArrayLoadInstruction"
directive: "type"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/ArrayLoadInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArrayLoadInstruction

Models an array load instruction in the `code` array of a `Code`
 attribute.  Corresponding opcodes have a `kind() kind`
 of `ARRAY_LOAD`.  Delivered as a `CodeElement` when
 traversing the elements of a `CodeModel`.
 

 An array load instruction is composite:
 {@snippet lang=text :
 // @link substring="ArrayLoadInstruction" target="CodeBuilder#arrayLoad(TypeKind)" :
 ArrayLoadInstruction(TypeKind typeKind) // @link substring="typeKind" target="#typeKind"
 }
 where `typeKind` is not `VOID void`, and `BOOLEAN boolean` is converted to `BYTE byte`.

**参见**

- Opcode.Kind#ARRAY_LOAD
- CodeBuilder#arrayLoad CodeBuilder::arrayLoad

> *Since 24*
