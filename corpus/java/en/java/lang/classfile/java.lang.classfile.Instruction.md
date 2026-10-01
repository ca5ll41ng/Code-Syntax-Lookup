---
id: "java-en-function-java-lang-classfile-instruction"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.Instruction"
title: "Instruction"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/Instruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Instruction

Models an executable instruction in the `code` array of the `CodeAttribute Code` attribute of a method.  The order of instructions in
 a `CodeModel` is significant.
 

 The `opcode() opcode` identifies the operation of an instruction.
 Each `kind() kind` of opcode has its own modeling interface
 for instructions.

**参见**

- Opcode

> *Since 24*
