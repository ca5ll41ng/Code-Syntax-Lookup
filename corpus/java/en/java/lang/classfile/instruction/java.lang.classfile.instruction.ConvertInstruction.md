---
id: "java-en-function-java-lang-classfile-instruction-convertinstruction"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.instruction.ConvertInstruction"
title: "ConvertInstruction"
directive: "type"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/ConvertInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConvertInstruction

Models a primitive conversion instruction in the `code` array of a
 `Code` attribute, such as `I2L i2l`.  Corresponding opcodes
 have a `kind() kind` of `CONVERT`.
 Delivered as a `CodeElement` when traversing the elements of a `CodeModel`.
 

 A primitive conversion instruction is composite:
 {@snippet lang=text :
 // @link substring="ConvertInstruction" target="#of(TypeKind, TypeKind)" :
 ConvertInstruction(
     TypeKind fromType, // @link substring="fromType" target="#fromType"
     TypeKind toType // @link substring="toType" target="#toType"
 )
 }
 where these conversions are valid:
 
 
- Between `int`, `long`, `float`, and `double`, where
 `fromType != toType`;
 
- From `int` to `byte`, `char`, and `short`.

**参见**

- Opcode.Kind#CONVERT
- CodeBuilder#conversion CodeBuilder::conversion

> *Since 24*
