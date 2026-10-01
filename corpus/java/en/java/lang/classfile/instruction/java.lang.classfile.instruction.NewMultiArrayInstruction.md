---
id: "java-en-function-java-lang-classfile-instruction-newmultiarrayinstruction"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.instruction.NewMultiArrayInstruction"
title: "NewMultiArrayInstruction"
directive: "type"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/NewMultiArrayInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NewMultiArrayInstruction

Models a `MULTIANEWARRAY multianewarray` instruction in the `code`
 array of a `Code` attribute.  Delivered as a `CodeElement`
 when traversing the elements of a `CodeModel`.
 

 A new multi-dimensional array instruction is composite:
 {@snippet lang=text :
 // @link substring="NewMultiArrayInstruction" target="#of" :
 NewMultiArrayInstruction(
     ClassEntry arrayType, // @link substring="arrayType" target="#arrayType"
     int dimensions // @link substring="dimensions" target="#dimensions"
 )
 }
 where the `arrayType` is an array class.

**参见**

- Opcode.Kind#NEW_MULTI_ARRAY
- CodeBuilder#multianewarray CodeBuilder::multianewarray

> *Since 24*
