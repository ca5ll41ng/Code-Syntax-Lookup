---
id: "java-en-function-java-lang-classfile-instruction-localvariable"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.instruction.LocalVariable"
title: "LocalVariable"
directive: "type"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/LocalVariable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LocalVariable

A pseudo-instruction which models a single entry in the `LocalVariableTableAttribute LocalVariableTable` attribute.  Delivered as a
 `CodeElement` during traversal of the elements of a `CodeModel`,
 according to the setting of the `ClassFile.DebugElementsOption` option.
 

 A local variable entry is composite:
 {@snippet lang=text :
 // @link substring="LocalVariable" target="#of(int, String, ClassDesc, Label, Label)" :
 LocalVariable(
     int slot, // @link substring="slot" target="#slot"
     String name, // @link substring="name" target="#name"
     ClassDesc type, // @link substring="type" target="#type"
     Label startScope, // @link substring="startScope" target="#startScope"
     Label endScope // @link substring="endScope" target="#endScope"
 )
 }
 Where `slot` is `#u2 u2`.
 

 Another model, `LocalVariableInfo`, also models a local variable
 entry; it has no dependency on a `CodeModel` and represents of bci
 values as `int`s instead of `Label`s, and is used as components
 of a `LocalVariableTableAttribute`.

 `LocalVariable` is used for all local variables in Java source code.
 If a local variable has a parameterized type, a type argument, or an array
 type of one of the previous types, a `LocalVariableType` should be
 created for that local variable as well.

**参见**

- LocalVariableInfo
- CodeBuilder#localVariable CodeBuilder::localVariable
- ClassFile.DebugElementsOption

> *Since 24*
