---
id: "java-en-function-java-lang-classfile-instruction-newobjectinstruction"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.instruction.NewObjectInstruction"
title: "NewObjectInstruction"
directive: "type"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/NewObjectInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NewObjectInstruction

Models a `NEW new` instruction in the `code` array of a `Code`
 attribute.  Delivered as a `CodeElement` when traversing the elements
 of a `CodeModel`.
 

 A new object instruction is composite:
 {@snippet lang=text :
 // @link substring="NewObjectInstruction" target="#of" :
 NewObjectInstruction(ClassEntry className) // @link substring="className" target="#className"
 }
 where the `className` is a non-abstract class.

**参见**

- Opcode.Kind#NEW_OBJECT
- CodeBuilder#new_ CodeBuilder::new_

> *Since 24*
