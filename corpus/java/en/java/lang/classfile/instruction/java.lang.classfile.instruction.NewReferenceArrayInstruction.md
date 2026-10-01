---
id: "java-en-function-java-lang-classfile-instruction-newreferencearrayinstruction"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.instruction.NewReferenceArrayInstruction"
title: "NewReferenceArrayInstruction"
directive: "type"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/NewReferenceArrayInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NewReferenceArrayInstruction

Models a `ANEWARRAY anewarray` instruction in the `code`
 array of a `Code` attribute.  Delivered as a `CodeElement`
 when traversing the elements of a `CodeModel`.
 

 A new reference array instruction is composite:
 {@snippet lang=text :
 // @link substring="NewReferenceArrayInstruction" target="#of" :
 NewReferenceArrayInstruction(ClassEntry componentType) // @link substring="componentType" target="#componentType"
 }

**参见**

- Opcode.Kind#NEW_REF_ARRAY
- CodeBuilder#newarray CodeBuilder::anewarray

> *Since 24*
