---
id: "java-en-function-java-lang-classfile-instruction-newprimitivearrayinstruction"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.instruction.NewPrimitiveArrayInstruction"
title: "NewPrimitiveArrayInstruction"
directive: "type"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/NewPrimitiveArrayInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NewPrimitiveArrayInstruction

Models a `NEWARRAY newarray` instruction in the `code`
 array of a `Code` attribute.  Delivered as a `CodeElement`
 when traversing the elements of a `CodeModel`.
 

 A new primitive array instruction is composite:
 {@snippet lang=text :
 // @link substring="NewPrimitiveArrayInstruction" target="#of" :
 NewPrimitiveArrayInstruction(TypeKind typeKind) // @link substring="typeKind" target="#typeKind"
 }
 where `typeKind` is primitive and not `void`.

**参见**

- Opcode.Kind#NEW_PRIMITIVE_ARRAY
- CodeBuilder#newarray CodeBuilder::newarray

> *Since 24*
