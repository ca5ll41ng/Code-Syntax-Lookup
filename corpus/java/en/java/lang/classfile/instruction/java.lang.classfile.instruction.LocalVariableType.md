---
id: "java-en-function-java-lang-classfile-instruction-localvariabletype"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.instruction.LocalVariableType"
title: "LocalVariableType"
directive: "type"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/LocalVariableType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LocalVariableType

A pseudo-instruction which models a single entry in the `LocalVariableTypeTableAttribute LocalVariableTypeTable` attribute.  Delivered
 as a `CodeElement` during traversal of the elements of a `CodeModel`,
 according to the setting of the `ClassFile.DebugElementsOption` option.
 

 A local variable type entry is composite:
 {@snippet lang=text :
 // @link substring="LocalVariableType" target="#of(int, String, Signature, Label, Label)" :
 LocalVariableType(
     int slot, // @link substring="slot" target="#slot"
     String name, // @link substring="name" target="#name"
     Signature signature, // @link substring="signature" target="#signatureSymbol"
     Label startScope, // @link substring="startScope" target="#startScope"
     Label endScope // @link substring="endScope" target="#endScope"
 )
 }
 Where `slot` is `#u2 u2`.
 

 Another model, `LocalVariableTypeInfo`, also models a local variable
 type entry; it has no dependency on a `CodeModel` and represents of bci
 values as `int`s instead of `Label`s, and is used as components
 of a `LocalVariableTypeTableAttribute`.

 `LocalVariableType` is used if a local variable has a parameterized
 type, a type argument, or an array type of one of the previous types as its
 type.  A `LocalVariable` with the erased type should still be created
 for that local variable.

**参见**

- LocalVariableTypeInfo
- CodeBuilder#localVariableType CodeBuilder::localVariableType
- ClassFile.DebugElementsOption

> *Since 24*
