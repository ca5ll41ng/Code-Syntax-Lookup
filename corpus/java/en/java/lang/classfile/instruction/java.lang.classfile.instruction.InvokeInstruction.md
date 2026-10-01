---
id: "java-en-function-java-lang-classfile-instruction-invokeinstruction"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.instruction.InvokeInstruction"
title: "InvokeInstruction"
directive: "type"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/InvokeInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InvokeInstruction

Models a method invocation instruction in the `code` array of a `Code` attribute, other than `InvokeDynamicInstruction invokedynamic`.
 Corresponding opcodes have a `kind() kind` of `INVOKE`.
 Delivered as a `CodeElement` when traversing the elements of a `CodeModel`.
 

 A method invocation instruction is composite:
 {@snippet lang=text :
 // @link substring="InvokeInstruction" target="#of(Opcode, MemberRefEntry)" :
 InvokeInstruction(
     Opcode opcode, // @link substring="opcode" target="#opcode()"
     MethodRefEntry | InterfaceMethodRefEntry method) // @link substring="method" target="#method()"
 )
 }
 where `method` must be an `InterfaceMethodRefEntry` for `INVOKEINTERFACE invokeinterface` opcode, and must be a `MethodRefEntry` for `INVOKEVIRTUAL invokevirtual` opcode.
 `INVOKESTATIC invokestatic` and `INVOKESPECIAL
 invokespecial` can have either type of entry for `method`.

**参见**

- Opcode.Kind#INVOKE
- CodeBuilder#invoke CodeBuilder::invoke

> *Since 24*
