---
id: "java-en-function-java-lang-classfile-instruction-fieldinstruction"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.instruction.FieldInstruction"
title: "FieldInstruction"
directive: "type"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/FieldInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FieldInstruction

Models a field access instruction in the `code` array of a `Code`
 attribute.  Corresponding opcodes have a `kind() kind`
 of `FIELD_ACCESS`.  Delivered as a `CodeElement` when
 traversing the elements of a `CodeModel`.
 

 A field access instruction is composite:
 {@snippet lang=text :
 // @link substring="FieldInstruction" target="#of(Opcode, FieldRefEntry)" :
 FieldInstruction(
     Opcode opcode, // @link substring="opcode" target="#opcode()"
     FieldRefEntry field, // @link substring="field" target="#field()"
 )
 }

**参见**

- Opcode.Kind#FIELD_ACCESS
- CodeBuilder#fieldAccess CodeBuilder::fieldAccess

> *Since 24*
