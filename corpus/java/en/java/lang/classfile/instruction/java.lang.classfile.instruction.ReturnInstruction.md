---
id: "java-en-function-java-lang-classfile-instruction-returninstruction"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.instruction.ReturnInstruction"
title: "ReturnInstruction"
directive: "type"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/ReturnInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReturnInstruction

Models a return-from-method instruction in the `code` array of a
 `Code` attribute.  Corresponding opcodes have a `kind() kind` of
 `RETURN`.  Delivered as a `CodeElement` when
 traversing the elements of a `CodeModel`.
 

 A return-from-method instruction is composite:
 {@snippet lang=text :
 // @link substring="ReturnInstruction" target="#of(TypeKind)" :
 ReturnInstruction(TypeKind typeKind) // @link substring="typeKind" target="#typeKind()"
 }
 where `typeKind` is `#computational-type
 computational` or `VOID void`.

**参见**

- Opcode.Kind#RETURN
- CodeBuilder#return_(TypeKind) CodeBuilder::return_

> *Since 24*
