---
id: "java-en-function-java-lang-classfile-instruction-invokedynamicinstruction"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.instruction.InvokeDynamicInstruction"
title: "InvokeDynamicInstruction"
directive: "type"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/InvokeDynamicInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InvokeDynamicInstruction

Models a dynamically-computed call site invocation instruction in the
 `code` array of a `Code` attribute.  The corresponding opcode is
 `INVOKEDYNAMIC invokedynamic`.  Delivered as a `CodeElement` when traversing the elements of a `CodeModel`.
 

 A dynamically-computed call site invocation instruction is composite:
 {@snippet lang=text :
 // @link substring="InvokeDynamicInstruction" target="#of" :
 InvokeDynamicInstruction(InvokeDynamicEntry invokedynamic) // @link substring="invokedynamic" target="#invokedynamic()"
 }

**参见**

- Opcode.Kind#INVOKE_DYNAMIC
- CodeBuilder#invokedynamic CodeBuilder::invokedynamic

> *Since 24*
