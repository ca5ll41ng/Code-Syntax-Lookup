---
id: "java-en-function-java-lang-classfile-instruction-constantinstruction"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.instruction.ConstantInstruction"
title: "ConstantInstruction"
directive: "type"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/ConstantInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantInstruction

Models a constant-load instruction in the `code` array of a `Code` attribute, including `IntrinsicConstantInstruction
 "intrinsic"`, `ArgumentConstantInstruction "argument"`, and
 `LoadConstantInstruction "load"` constant instructions.
 Corresponding opcodes have a `kind() kind` of `CONSTANT`.  Delivered as a `CodeElement` when traversing
 the elements of a `CodeModel`.
 

 The loaded constant value is symbolically represented as a `ConstantDesc`:
 {@snippet lang=text :
 // @link substring="ConstantInstruction" target="CodeBuilder#loadConstant(ConstantDesc)" :
 ConstantInstruction(ConstantDesc constantValue) // @link substring="constantValue" target="#constantValue()"
 }

**参见**

- Opcode.Kind#CONSTANT
- CodeBuilder#loadConstant(ConstantDesc) CodeBuilder::loadConstant

> *Since 24*
