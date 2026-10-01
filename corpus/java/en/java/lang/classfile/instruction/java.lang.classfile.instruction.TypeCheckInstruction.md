---
id: "java-en-function-java-lang-classfile-instruction-typecheckinstruction"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.instruction.TypeCheckInstruction"
title: "TypeCheckInstruction"
directive: "type"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/TypeCheckInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TypeCheckInstruction

Models an `INSTANCEOF instanceof` or a `CHECKCAST checkcast`
 instruction in the `code` array of a `Code` attribute.  Corresponding
 opcodes have a `kind() kind` of `TYPE_CHECK`.
 Delivered as a `CodeElement` when traversing the elements of a `CodeModel`.
 

 An `instanceof` checks the type and pushes an integer to the operand stack.
 A `checkcast` checks the type and throws a `ClassCastException` if
 the check fails.  `instanceof` treat the `null` reference as a
 failure, while `checkcast` treat the `null` reference as a success.
 

 A type check instruction is composite:
 {@snippet lang=text :
 // @link substring="TypeCheckInstruction" target="#of(Opcode, ClassEntry)" :
 TypeCheckInstruction(
     Opcode opcode, // @link substring="opcode" target="#opcode"
     ClassEntry type // @link substring="type" target="#type"
 )
 }

> *Since 24*
