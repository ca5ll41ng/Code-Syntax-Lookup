---
id: "java-en-function-java-lang-classfile-instruction-arraystoreinstruction"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.instruction.ArrayStoreInstruction"
title: "ArrayStoreInstruction"
directive: "type"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/ArrayStoreInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArrayStoreInstruction

Models an array store instruction in the `code` array of a `Code`
 attribute.  Corresponding opcodes have a `kind() kind`
 of `ARRAY_STORE`.  Delivered as a `CodeElement` when
 traversing the elements of a `CodeModel`.
 

 An array store instruction is composite:
 {@snippet lang=text :
 // @link substring="ArrayStoreInstruction" target="CodeBuilder#arrayStore(TypeKind)" :
 ArrayStoreInstruction(TypeKind typeKind) // @link substring="typeKind" target="#typeKind"
 }
 where `typeKind` is not `VOID void`, and `BOOLEAN boolean` is converted to `BYTE byte`.

**参见**

- Opcode.Kind#ARRAY_STORE
- CodeBuilder#arrayStore CodeBuilder::arrayStore

> *Since 24*
