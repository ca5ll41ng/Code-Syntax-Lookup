---
id: "java-en-function-java-lang-classfile-instruction-lookupswitchinstruction"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.instruction.LookupSwitchInstruction"
title: "LookupSwitchInstruction"
directive: "type"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/LookupSwitchInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LookupSwitchInstruction

Models a `LOOKUPSWITCH lookupswitch` instruction in the `code` array of a `Code` attribute.  Delivered as a `CodeElement`
 when traversing the elements of a `CodeModel`.
 

 A lookup switch instruction is composite:
 {@snippet lang=text :
 // @link substring="LookupSwitchInstruction" target="#of" :
 LookupSwitchInstruction(
     Label defaultTarget, // @link substring="defaultTarget" target="#defaultTarget"
     List cases // @link substring="cases" target="#cases()"
 )
 }
 If elements in `cases` are not sorted ascending by their `caseValue caseValue`, a sorted version of the `cases` list
 will be written instead.

**参见**

- Opcode.Kind#LOOKUP_SWITCH
- CodeBuilder#lookupswitch CodeBuilder::lookupswitch

> *Since 24*
