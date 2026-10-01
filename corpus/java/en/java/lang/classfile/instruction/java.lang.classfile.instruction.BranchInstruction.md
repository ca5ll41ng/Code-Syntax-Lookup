---
id: "java-en-function-java-lang-classfile-instruction-branchinstruction"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.instruction.BranchInstruction"
title: "BranchInstruction"
directive: "type"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/BranchInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BranchInstruction

Models a branching instruction (conditional or unconditional) in the `code` array of a `Code` attribute.  Corresponding opcodes have a
 `kind() kind` of `BRANCH`.  Delivered as
 a `CodeElement` when traversing the elements of a `CodeModel`.
 

 A branch instruction is composite:
 {@snippet lang=text :
 // @link substring="BranchInstruction" target="#of":
 BranchInstruction(
     Opcode opcode, // @link substring="opcode" target="#opcode()"
     Label target // @link substring="target" target="#target()"
 )
 }
 

 Due to physical restrictions, some types of instructions cannot encode labels
 too far away in the list of code elements.  In such cases, the `ClassFile.ShortJumpsOption` controls how an invalid branch instruction model
 is written by a `CodeBuilder`.

**参见**

- Opcode.Kind#BRANCH
- CodeBuilder#branch CodeBuilder::branch
- ClassFile.ShortJumpsOption

> *Since 24*
